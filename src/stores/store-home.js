import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
    state: () => ({
        component: 'Home',
        slug: '',
        header: {
            title: 'Welcome to Agnishwar Raychaudhuri\'s AI & Data Science Hub',
            subtitle: 'Transforming data into decisions, one model at a time',
            action: 'Explore My Work',
            parallax: {
                location: './images/journey.jpg'
            }
        },
        content: {
            title: 'About Me',
            description: [
                'Hi, I\'m Agnishwar Raychaudhuri — a results-driven and technically versatile individual with a strong foundation in data science, machine learning, and AI-driven application development. My work focuses on predictive modeling, optimization algorithms, and intelligent automation to drive meaningful impact in domains like healthcare, finance, and travel.',
                'I’m currently pursuing a BTech in Data Science at NIIT University and actively enhancing my expertise in augmented analytics and cloud-native data science frameworks. I enjoy building scalable AI-ML solutions that bridge the gap between data and decision-making, and I’m always eager to explore cutting-edge techniques in machine learning and intelligent systems.',
                'Passionate about AI, ML, and all things data · Open to collaborations on innovative tech projects · Happy to chat about algorithms, analytics, or anything data-driven · Fun fact: I juggle AI research, quiz competitions, and panel talks — all while coding like a pro!'
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
