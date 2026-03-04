import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Cura Nova - Smart AI-Powered EMR',
            tech: 'React 19, TypeScript, Cloudflare Workers',
            desc: 'Modernized UI/UX across 20+ React components with Tailwind CSS. Fixed data-loss bug by reworking date-sorting. Deployed production build to Cloudflare Workers (D1 DB) with OAuth.'
        },
        {
            title: 'TireFax',
            tech: 'JavaScript, CSS, Python',
            desc: 'Developed a tire tracking platform with unique ID-based data management for internal teams. Designed clean UI and integrated Python scripts for performance analysis.'
        },
        {
            title: 'AI Dev Onboarding Platform',
            tech: 'Python, Flask',
            desc: 'Engineered an AI-integrated web platform to automate the developer onboarding process, reducing administrative overhead and enhancing new hire experience.'
        },
        {
            title: 'NoSnowNaples',
            tech: 'React, UI Components, APIs',
            desc: 'Developed responsive UI components for a real estate property listing platform. Implemented advanced property search interface with filters and dynamic results. Built property detail pages and integrated frontend with MLS property data APIs.'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">My Portfolio</h2>
                <div className="projects-grid">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="project-card">
                            <h3 className="project-title">{proj.title}</h3>
                            <span className="project-tech">{proj.tech}</span>
                            <p className="project-desc">{proj.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
