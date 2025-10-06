import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: '🎨',
            skills: ['React', 'JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3']
        },
        {
            title: 'Backend',
            icon: '⚙️',
            skills: ['Node.js', 'Python']
        },
        {
            title: 'Database',
            icon: '🗄️',
            skills: ['MongoDB']
        },
        // {
        //   title: 'Tools & Others',
        //   icon: '🛠️',
        //   skills: ['Git', 'Docker', 'AWS', 'Webpack', 'Jest', 'Figma']
        // }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{'const skills = {'}</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={category.title}
                            className="skill-category"
                            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                                <div className="starting-brace">{'{'}</div>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skill}
                                        className="skill-tag"
                                        style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                                    >
                                        "{skill}"
                                    </div>
                                ))}
                            </div>
                            <div className="closing-brace">{'}'}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;