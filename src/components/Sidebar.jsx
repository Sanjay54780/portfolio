import React from 'react';
import './Sidebar.css';
import dp from '../assets/dp.jpeg';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="sidebar-profile">
                <div className="profile-img-container">
                    <img src={dp} alt="Profile" className="profile-img" />
                </div>
                <h2 className="profile-name">Sanjay P</h2>
            </div>
            <ul className="sidebar-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience & Education</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#achievements">Achievements</a></li>
            </ul>
            <div className="sidebar-footer">
                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <p className="copyright">&copy; 2026 Sanjay P.</p>
            </div>
        </nav>
    );
};

export default Sidebar;
