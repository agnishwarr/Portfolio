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
                    title: 'A Stacked Machine Learning Framework for Type 2 Diabetes Prediction Using Clinical and Behavioral Data',
                    summary: 'A predictive model for early detection of Type 2 Diabetes Mellitus using a stacked ensemble approach that integrates behavioral and clinical health data.',
                    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'XGBoost', 'Pandas', 'NumPy'],
                    highlights: [
                        'Random Forest on behavioral data (BRFSS)',
                        'XGBoost on clinical data (PIMA & FGHDD)',
                        'Meta-level XGBoost classifier for final prediction',
                        'Achieved 89% overall accuracy',
                        'Behavioral features contributed 72% to predictions',
                        'Combines heterogeneous data sources for holistic diagnosis'
                    ]
                },
                {
                    title: 'Mean Time To Failure of a Coherent System',
                    summary: 'Analyzes a special coherent system with exchangeable components where, upon system failure, a standby component activates to restore functionality with the remaining operational components.',
                    tech: ['MATLAB', 'Python', 'SciPy', 'NumPy'],
                    highlights: [
                        'Calculates and models system failure probability',
                        'Implements statistical methods to evaluate reliability',
                        'Simulates different failure scenarios for system assessment'
                    ]
                },
                {
                    title: 'Automated Credit Scoring System using ML',
                    summary: 'A web-based application that uses machine learning to automate credit scoring by analyzing financial and behavioral data to predict creditworthiness for financial institutions and individual users.',
                    tech: ['MERN Stack', 'Python', 'Scikit-learn', 'Pandas', 'Docker', 'Jenkins'],
                    highlights: [
                        'Real-time credit score computation based on multiple data inputs',
                        'Secure authentication and user data encryption',
                        'Interactive dashboards for financial insights'
                    ]
                },
                {
                    title: 'Application of Metaheuristic Optimization Techniques to Solve TSP',
                    summary: 'Implements Ant Colony Optimization, Simulated Annealing, and Genetic Algorithm approaches to solve the Traveling Salesman Problem and compares the performance of each method.',
                    tech: ['Python', 'NetworkX', 'Matplotlib', 'SciPy'],
                    highlights: [
                        'Benchmarks multiple optimization techniques',
                        'Visualizes the best path found by each algorithm',
                        'Performance comparison with real-world datasets'
                    ]
                },
                {
                    title: 'AI Deep Q-Learning for Lunar Landing',
                    summary: 'This project implements a Deep Q-Learning (DQN) agent to solve the Lunar Lander environment from Gymnasium, allowing an AI model to autonomously land a spaceship on the moon.',
                    tech: ['Python', 'PyTorch', 'Gymnasium', 'NumPy', 'Collections', 'Matplotlib', 'PIL'],
                    highlights: [
                        'Environment Simulation: The Lunar Lander environment simulates a spacecraft attempting to land on the lunar surface with rewards for successful landing and penalties for crashing',
                        'DQN Agent: Utilizes a neural network to approximate the optimal Q-function, determining the best actions for the AI model',
                        'Experience Replay: Stores and learns from past experiences using a memory buffer to improve training stability',
                        'Target Network: A separate target network helps stabilize training by periodically updating its parameters',
                        'Exploration-Exploitation Balance: Uses an epsilon-greedy strategy to shift behavior from exploration to exploitation over time',
                        'Training Process: The agent is trained over multiple episodes, gradually improving its landing performance through reinforcement learning'
                    ]
                },
                {
                    title: 'Agentic AI Travel Planner',
                    summary: 'This project is an AI-powered travel itinerary planner built with Streamlit that creates day-wise trip plans based on user input and optionally emails them. It demonstrates the modular integration of AI capabilities and automation in a real-world utility app.',
                    tech: ['Python', 'Streamlit', 'SMTP', 'dotenv', 'Jinja2', 'LangChain', 'OpenAI API'],
                    highlights: [
                        'User Input Interface: A simple and intuitive form where users can input their travel destination and trip duration',
                        'Itinerary Generator: Uses prompt templates to generate travel plans',
                        'Email Delivery: Automatically sends the generated itinerary to the user\'s email using secure Gmail App Passwords',
                        'Modular Design: Built for easy extension — additional features like PDF export and map embedding are available but disabled by default',
                        'Secure & Lightweight: Only requires a Gmail account with 2FA and app password to function; AI services are optional',
                        'Streamlit App UI: A lightweight frontend built with Streamlit, offering instant deployment capability on local or cloud platforms'
                    ]
                }
            ],
            experience: {
                title: 'Experience',
                roles: [
                    {
                        position: 'Teaching Assistant – Learning and Pedagogy Desk',
                        organization: 'Centre of Excellence in Education Technology (CoEET), NIIT University',
                        period: 'Jan 2023 – May 2024',
                        responsibilities: [
                            'Designing and implementing structured guidelines, role responsibilities, and evaluation rubrics for 10+ university-level projects, supporting over 100 students throughout the semester.',
                            'Conducting 7 multimedia-based training sessions to enhance student engagement, improve clarity in project expectations, and drive measurable improvements in learning outcomes.'
                        ]
                    }
                ]
            }
        },
        footer: {}
    }),

    getters: {},

    actions: {}
});
