import { defineStore } from 'pinia';
import axios from "axios";

export const useProfileStore = defineStore('profile', {
    state: () => ({
        component: 'Profile',
        username: 'agnishwarr',
        org: '', // Leave empty or add GitHub org name if any
        name: 'Agnishwar',
        initial: 'A.',
        surname: 'Raychaudhuri',
        social: {
            github: 'https://github.com/agnishwarr',
            linkedin: 'https://linkedin.com/in/agnishwarraychaudhuri'
        },
        resume_url: 'https://drive.google.com/file/d/1mOTvD5QXidcXrYYZEDVJExXcmtK2CZnR/view?usp=sharing',
        github_personal_token: import.meta.env.VITE_GITHUB_PERSONAL_TOKEN,
        repositories: [],
        message: 'Fetching Crafts...'
    }),

    getters: {
        getMessage(state) {
            return state.message;
        }
    },

    actions: {
        async fetchOrgRepositories() {
            const org = this.org;
            const token = this.github_personal_token;

            if (!org) return [];

            const response = await axios.get(`https://api.github.com/orgs/${org}/repos?per_page=100`, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            return response.data;
        },
        async fetchRepositories() {
            const username = this.username;
            const token = this.github_personal_token;
            let response;

            try {
                response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                });
                this.message = 'Crafts fetched successfully!';
                setTimeout(() => {
                    this.message = null;
                }, 1000);
            } catch (error) {
                this.message = 'Error fetching crafts!';
                return;
            }

            const orgRepos = await this.fetchOrgRepositories();
            const allRepos = [...response.data, ...orgRepos];

            const filteredRepos = allRepos.filter(
                repo =>
                    (repo.name === 'diabetes-risk-predictor') ||
                    (repo.name === 'credit-score-ml-app') ||
                    (repo.name === 'ai-travel-planner') ||
                    (repo.name === 'tsp-metaheuristics') ||
                    (repo.name === 'any-other-project-you-want')
            );

            this.repositories = filteredRepos.map(repo => ({
                id: repo.id,
                name: repo.name,
                full_name: repo.full_name,
                description: repo.description,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                language: repo.language,
                license: repo.license?.name || '',
                visibility: repo.visibility,
                url: repo.html_url,
                watchers: repo.watchers_count
            }));
        }
    },
});
