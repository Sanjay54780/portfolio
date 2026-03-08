import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            items: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'C', 'C++','React']
        },
        {
            title: 'Tools / Platforms',
            items: ['Canva', 'Linux', 'Matlab', 'Keil uVision']
        },
        {
            title: 'Technical Focus',
            items: ['Machine Learning', 'Web Development', 'Competitive Coding']
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">My Technical Toolkit</h2>
                <div className="skills-grid">
                    {skillCategories.map((cat, idx) => (
                        <div key={idx} className="skill-category">
                            <h3 className="skill-cat-title">{cat.title}</h3>
                            <div className="skill-items">
                                {cat.items.map(skill => (
                                    <span key={skill} className="skill-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
