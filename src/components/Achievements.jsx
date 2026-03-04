import React from 'react';
import './Achievements.css';

const Achievements = () => {
    return (
        <section id="achievements" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Achievements & Certifications</h2>

                <div className="achievements-content">
                    <div className="ach-box">
                        <h3>Hackathons & Awards</h3>
                        <ul>
                            <li>Qualified & Secured 5th place in Revive Hackathon (2024)</li>
                            <li>Participated in MAKETHON '25 Hackathon</li>
                            <li>Participated in national level Football competition</li>
                            <li>Selected in U17 District Football team in Coimbatore</li>
                        </ul>
                    </div>

                    <div className="ach-box">
                        <h3>Certifications</h3>
                        <ul className="certs-list">
                            <li>OOP in C++: Getting Started - Infosys Springboard</li>
                            <li>Programming Fundamentals using Python (Part 1 & 2) - Infosys Springboard</li>
                            <li>Basics of Python - Infosys Springboard</li>
                            <li>Python for Problem Solving-1 - Codechef</li>
                            <li>Spoken Tutorial (IIT Bombay) - Python, C, C++, Java, MySQL</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Achievements;
