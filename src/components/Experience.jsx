import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section bg-light">
            <div className="container">
                <h2 className="section-title">My Journey</h2>
                <div className="timeline">

                    <div className="timeline-item">
                        <h3 className="timeline-title">B.Tech in Computer Science Engineering</h3>
                        <span className="timeline-date">2024 - 2028 | Vellore Institute of Technology, Chennai</span>
                        <p>CGPA: 8.06</p>
                    </div>

                    <div className="timeline-item">
                        <h3 className="timeline-title">Contributor, VIT University Clubs</h3>
                        <span className="timeline-date">2024 - Present</span>
                        <p>
                            <strong>Event Management:</strong> Coordinated and executed multiple club events from planning to execution.<br />
                            <strong>Marketing Campaigns:</strong> Marketing Team for Thanima VITC and The Short Film Club, driving increased attendance.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h3 className="timeline-title">High School Education</h3>
                        <span className="timeline-date">2021 - 2024 | Velammal Public School, Coimbatore</span>
                        <p>Senior Secondary: 89.6%, Higher Secondary: 85.4%</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
