import React, { useEffect, useState } from "react";
import "./About.css";
import { assets } from "../../assets/assets.js";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.about-section');
            const rect = aboutSection.getBoundingClientRect();
            // Check if the section is in the viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="about-section">
            <div className={`header-about ${isVisible ? 'fade-slide-in' : ''}`}>
                <i className="bi bi-code"></i>
                <h1>Meet Your Developer</h1>
            </div>
            <div className={`grid-about ${isVisible ? 'fade-slide-in' : ''}`}>
                <div className={`canvas-2 ${isVisible ? 'fade-slide-in' : ''}`}>
                    <img src={assets.profile_picture} alt="Profile" />
                </div>
                <div className={`canvas-1 ${isVisible ? 'fade-slide-in' : ''}`}>
                    <h1>Hasif Zikry</h1>
                    <p>
                        Hi, I'm Hasif Zikry,
                        a passionate Software Engineering graduate who dedicates himself to exploring programming and data science.
                        I thrive on discovering new technologies in web development and machine learning, believing that every line of code can create meaningful impact. Driven by curiosity and a commitment to lifelong learning,
                        I’m excited to leverage technology to enhance lives.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
