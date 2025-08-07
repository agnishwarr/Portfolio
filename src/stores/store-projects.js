import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
    state: () => ({
        component: 'Crafts',
        slug: 'projects',
        header: {
            title: 'Enchanting Crafts',
            subtitle: 'Step into my world of magical creations',
            parallax: {
                location: './images/wands.jpg'
            }
        },
         content: {
            title: 'Projects',
            description: [
                'Welcome to my portfolio of AI and data science projects — a curated collection of real-world solutions built with machine learning, statistical modeling, and intelligent automation.',
                'These projects reflect my technical expertise and passion for solving complex problems using data-driven approaches. From healthcare analytics and credit risk prediction to AI agents and optimization algorithms, each project demonstrates rigorous application of data science principles.',
                'Explore my GitHub to view the code, experiment with the models, or collaborate on new ideas. Each project here is built for impact, innovation, and practical relevance in today’s data-centric world.'
            ],
            list: [
                {
                    title: 'Type 2 Diabetes Prediction with Stacked ML Models',
                    summary: 'Built a predictive framework using Random Forest and XGBoost to diagnose diabetes based on clinical and behavioral data. Behavioral features accounted for 72% of prediction power.',
                    tech: ['Python', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'Pandas', 'NumPy'],
                    highlights: [
                        'Stacked ensemble with Random Forest (BRFSS) + XGBoost (PIMA & FGHDD)',
                        'Meta-level XGBoost for final prediction',
                        'Achieved 89% accuracy on test data',
                        'Real-world integration of heterogeneous datasets'
                    ]
                },
                {
                    title: 'Mean Time To Failure of a Coherent System',
                    summary: 'Modeled reliability of a standby-enabled coherent system using analytical and simulation-based techniques.',
                    tech: ['MATLAB', 'Python', 'NumPy', 'SciPy'],
                    highlights: [
                        'Probability-based system failure modeling',
                        'Simulated multiple reliability scenarios',
                        'Applied concepts from reliability engineering',
                        'Statistical validation with synthetic data'
                    ]
                },
                {
                    title: 'Automated Credit Scoring System using ML',
                    summary: 'Designed and deployed a credit scoring web app using a Random Forest model with real-time score generation and secure user interface.',
                    tech: ['MERN Stack', 'Python', 'Docker', 'Jenkins', 'Scikit-learn'],
                    highlights: [
                        'Real-time prediction based on 10 financial & behavioral features',
                        'CI/CD integrated for production deployment',
                        'User-friendly frontend with dashboards',
                        'Secure data handling and user authentication'
                    ]
                },
                {
                    title: 'Metaheuristic Solutions for Traveling Salesman Problem',
                    summary: 'Implemented and compared Ant Colony Optimization, Simulated Annealing, and Genetic Algorithm to solve TSP on Indian cities.',
                    tech: ['Python', 'NetworkX', 'SciPy', 'Matplotlib'],
                    highlights: [
                        'Custom-built algorithms from scratch',
                        'Benchmarked solution efficiency & convergence',
                        'Visualized optimal paths across multiple runs',
                        'Evaluated time-performance tradeoffs'
                    ]
                },
                {
                    title: 'AI Deep Q-Learning Agent for Lunar Landing',
                    summary: 'Developed a Deep Q-Learning (DQN) agent to solve the Lunar Lander task using Gymnasium and PyTorch.',
                    tech: ['Python', 'PyTorch', 'Gymnasium', 'NumPy', 'Matplotlib'],
                    highlights: [
                        'Custom neural network-based Q-agent',
                        'Replay buffer, target network for stability',
                        'Epsilon-greedy policy for exploration/exploitation',
                        'Improved reward over 1000+ training episodes'
                    ]
                },
                {
                    title: 'AI-Powered Travel Planner with Streamlit',
                    summary: 'An NLP-based app that creates custom itineraries and emails them to users. Demonstrates prompt engineering, automation, and UX.',
                    tech: ['Python', 'Streamlit', 'LangChain', 'OpenAI API', 'SMTP', 'Jinja2'],
                    highlights: [
                        'Collects user preferences and auto-generates multi-day plans',
                        'Email delivery via secure Gmail App Passwords',
                        'Built-in modularity for PDF export & maps',
                        'Lightweight, deployable with no external DB'
                    ]
                }
            ]
        },
        footer: {

        }
    }),

    getters: {

    },

    actions: {

    },
});