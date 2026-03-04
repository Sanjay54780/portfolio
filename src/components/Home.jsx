import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home-section section">
            <div className="home-content">
                <h1 className="home-greeting">Hello I'm <span className="highlight">Sanjay P</span>!</h1>
                <p className="home-tagline">Computer Science Engineering B.Tech at VIT</p>
                <p className="home-contact">sanjay.p@vitstudent.ac.in | 9037054780</p>
                <a href="#about" className="btn btn-primary">Let's connect</a>
            </div>
        </section>
    );
};

export default Home;
