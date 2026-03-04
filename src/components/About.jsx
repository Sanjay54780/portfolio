import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Who am I?</h2>
                <div className="about-content">
                    <p>
                        I'm a pre-final year B.Tech student at Vellore Institute of Technology, Chennai, majoring in Computer Science Engineering (CGPA: 9.05).
                    </p>
                    <p>
                        I'm passionate about building tech solutions that make a tangible difference, from AI-powered healthcare records (Cura Nova) to practical internal tools (TireFax). I love exploring machine learning, web development, and participating in hackathons. Check out my projects to see what I'm capable of!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
