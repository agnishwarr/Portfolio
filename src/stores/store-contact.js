import { defineStore } from 'pinia';

export const useContactStore = defineStore('contact', {
    state: () => ({
        component: 'Owl',
        slug: 'contact',
        header: {
            title: 'Contact Me',
            subtitle: 'Let\'s collaborate on data-driven innovation',
            parallax: {
                location: './images/message.jpg'
            }
        },
        content: {
            title: 'Connect with Me',
            card_title: 'Send me a message',
            description: [
                'Welcome to my contact page - your gateway to collaborating on cutting-edge AI and data science projects. Whether you\'re a fellow data enthusiast, researcher, developer, or simply curious about what\'s possible with data, I\'d love to hear from you.',
                'Reach out with your thoughts, questions, ideas, or opportunities. Whether it\'s discussing ML algorithms, brainstorming smart applications, or co-creating impactful solutions - I\'m all in.',
                'I\'m passionate about turning complex data into meaningful insights and building intelligent systems that drive real-world impact. Let\'s explore the future of tech together - from machine learning and NLP to intelligent automation.',
                'Drop a message and let\'s make innovation happen, one model at a time.'
            ],
            resume_url: 'https://drive.google.com/file/d/1oj_wKrFnbMp6J-zLMlCgHiavwIqAzbCm/view?usp=drive_link',
            contact_info: {
                location: 'Bengaluru, Karnataka',
                phone: '9739899241',
                email: 'agnishwar73@gmail.com'
            }
        },
        footer: {}
    }),

    getters: {},

    actions: {}
});
