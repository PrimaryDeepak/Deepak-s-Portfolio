import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Resume Builder',
            description: 'A user-friendly web application designed to help individuals create professional resumes quickly and easily. Features include customizable templates, real-time preview, drag-and-drop sections, and PDF export functionality.',
            image: '📄',
            tech: ['React', 'Node.js', 'Ant Design'],
            liveUrl: 'https://build-resume-app.web.app/',
        },
        {
            id: 2,
            title: 'JD Generator',
            description: 'A web application that leverages AI to generate comprehensive and tailored job descriptions based on user inputs. Ideal for HR professionals and recruiters looking to streamline the hiring process.',
            image: '📝',
            tech: ['React', 'Node.js', 'Ant Design', 'API', 'AI'],
            liveUrl: '#',
        }
        // {
        //   id: 1,
        //   title: 'E-Commerce Platform',
        //   description: 'A full-featured e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.',
        //   image: '🛒',
        //   tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        //   liveUrl: '#',
        //   githubUrl: '#'
        // },
        // {
        //     id: 2,
        //     title: 'Weather Dashboard',
        //     description: 'Real-time weather dashboard with interactive charts and forecasting, built using weather APIs and modern JavaScript.',
        //     image: '🌤️',
        //     tech: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3'],
        //     liveUrl: '#',
        //     githubUrl: '#'
        // },
        // {
        //     id: 3,
        //     title: 'Task Management App',
        //     description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        //     image: '📋',
        //     tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
        //     liveUrl: '#',
        //     githubUrl: '#'
        // },
        // {
        //     id: 4,
        //     title: 'Social Media Dashboard',
        //     description: 'Analytics dashboard for social media management with data visualization and automated reporting features.',
        //     image: '📊',
        //     tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
        //     liveUrl: '#',
        //     githubUrl: '#'
        // },
        // {
        //     id: 5,
        //     title: 'Portfolio Website',
        //     description: 'Responsive portfolio website with modern design, smooth animations, and optimized performance.',
        //     image: '💼',
        //     tech: ['React', 'CSS3', 'Framer Motion', 'Netlify'],
        //     liveUrl: '#',
        //     githubUrl: '#'
        // },
        // {
        //     id: 6,
        //     title: 'Chat Application',
        //     description: 'Real-time chat application with multiple rooms, file sharing, and emoji support using WebSocket technology.',
        //     image: '💬',
        //     tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
        //     liveUrl: '#',
        //     githubUrl: '#'
        // }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{'const projects = ['}</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">
                        <span className="comment">{`// Here are some applications I've built`}</span>
                    </p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image">
                                <span className="project-emoji">{project.image}</span>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.liveUrl} className="project-link">
                                            <span>�</span> Deploy
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={tech}
                                            className="tech-tag"
                                            style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;