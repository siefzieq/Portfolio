import React, {useEffect, useState} from "react";
import "./Projects.css"
import {assets} from "../../assets/assets.js";

const Projects = () =>{
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const[isLeftVisible,setIsLeftVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerSection = document.querySelector('.header-project');
            const contentSection = document.querySelector('.canvas-2-project');
            const leftSection = document.querySelector('.canvas-2-project');

            // Check if header section is in the viewport
            if (headerSection) {
                const headerRect = headerSection.getBoundingClientRect();
                if (headerRect.top < window.innerHeight && headerRect.bottom > 0) {
                    setIsHeaderVisible(true);
                }
            }
            // Check if content section is in the viewport
            if (contentSection) {
                const contentRect = contentSection.getBoundingClientRect();
                if (contentRect.top < window.innerHeight && contentRect.bottom > 0) {
                    setIsContentVisible(true);
                }
            }
            if (leftSection){
                const leftRect= leftSection.getBoundingClientRect();
                if (leftRect.top < window.innerHeight && leftRect.bottom > 0) {
                    setIsLeftVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <>
            <div className="header-project">
                <i className={`bi bi-gear-wide-connected ${isHeaderVisible ? 'fade-slide-in' : ''}`}></i>
                <h1 className={`${isHeaderVisible? 'fade-slide-in' : ''}`}>Projects</h1>
            <div className="grid-edu">
                <div className={`canvas-2-project ${isContentVisible ? 'slide-in-left':''}`}>
                    <img src={assets.map_picture} style={{marginTop:'-80px'}}/>
                    <h2 style={{paddingTop:'10px'}}>Ecomap Selangor</h2>
                    <span>Bachelor's Degree Final Year Project</span>
                    <p>A web-based centralized monitoring system was developed for Selangor State Secretariat (SUK)
                        to provide real-time tracking of urban farm progress across 35 apartments under the Laman
                        Strata Hijau 2.0 initiative.
                    </p>
                    <div className="button-container">
                        <button className="button-edu" style={{marginLeft:'30px',marginTop:'10px'}}>
                            Laravel
                        </button>
                        <button className="button-edu" style={{marginTop:'10px'}}>
                            PHP
                        </button>
                        <button className="button-edu" style={{marginTop:'10px'}}>
                            Bootstrap
                        </button>
                        <button className="button-edu" style={{marginLeft:'30px'}}>
                            Mysql
                        </button>
                        <button className="button-edu">
                            Figma
                        </button>
                        <button className="button-edu" style={{width:'150px'}}>
                            High Chart JS
                        </button>
                        <button className="button-edu" style={{marginLeft:'30px'}}>
                            MapBox
                        </button>
                    </div>
                    <div className="url-container">
                        <a href="https://github.com/siefzieq/Ecomap-Selangor" target="_blank" rel="noopener noreferrer">
                            Link to Github <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
                <div className={`canvas-2-project ${isContentVisible ? 'slide-in-right':''}`}>
                    <img src={assets.mock_system} style={{marginTop:'-100px'}}/>
                    <h2>Gemini Clone</h2>
                    <span>Personal Project</span>
                    <p>A Gemini-like Mock System to enhance React JS skills and explore generative AI.
                        The system simulates ChatGPT features, enabling text-based interactions and AI-generated responses,
                        with plans to add an upload function for future expansion.
                    </p>
                    <div className="button-container">
                        <button className="button-edu" style={{marginLeft:'30px',marginTop:'10px'}}>
                            React JS
                        </button>
                        <button className="button-edu" style={{marginTop:'10px'}}>
                            Gemini API
                        </button>
                        <button className="button-edu" style={{marginTop:'10px'}}>
                            HTML
                        </button>
                        <button className="button-edu" style={{marginLeft:'30px'}}>
                            Bootstrap
                        </button>
                        <button className="button-edu">
                            Netlify
                        </button>
                    </div>
                    <div className="url-container">
                        <a href="https://github.com/siefzieq/Gemini-Clone" target="_blank" rel="noopener noreferrer">
                            Link to Github <i className="bi bi-github"></i>
                        </a>
                        <a href="https://gemini-clone-website1.netlify.app" target="_blank" rel="noopener noreferrer">
                                Link to URL<i className="bi bi-link"></i>
                        </a>
                    </div>
                </div>
                <div className={`canvas-2-project ${isContentVisible ? 'slide-in-left':''}`}>
                    <img src={assets.model} style={{marginTop:'-100px'}}/>
                    <h2>Denver Crime Model</h2>
                    <span>Machine Learning Project</span>
                    <p>A Gemini-like Mock System to enhance React JS skills and explore generative AI.
                        The system simulates ChatGPT features, enabling text-based interactions and AI-generated responses,
                        with plans to add an upload function for future expansion.
                    </p>
                    <div className="button-container">
                        <button className="button-edu" style={{marginLeft:'30px',marginTop:'10px'}}>
                            Python
                        </button>
                        <button className="button-edu" style={{marginTop:'10px'}}>
                            Jupyter
                        </button>
                        <button className="button-edu" style={{marginTop:'10px'}}>
                            Numpy
                        </button>
                        <button className="button-edu" style={{marginLeft:'30px'}}>
                            MatplotLib
                        </button>
                        <button className="button-edu">
                            Pandas
                        </button>
                    </div>
                    <div className="url-container">
                        <a href="https://github.com/siefzieq/Denver-Crime-Model" target="_blank" rel="noopener noreferrer">
                            Link to Github <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
                <div className={`canvas-2-project ${isContentVisible ? 'slide-in-right':''}`}>
                    <img src={assets.ITMS_system} style={{marginTop:'-100px'}}/>
                    <h2 style={{fontSize:'29px'}}>ITMS Management System</h2>
                    <span>Web Programming Project</span>
                    <p>
                        The ITMS Management System is a Laravel-based tool for managing software development projects at UNITEN.
                        It allows the ITMS Department to assign projects, track progress,
                        and monitor key details like system owner, platform, and deployment type.
                    </p>
                    <div className="button-container">
                        <button className="button-edu" style={{marginLeft:'30px',marginTop:'10px'}}>
                            PHP
                        </button>
                        <button className="button-edu" style={{marginTop:'10px'}}>
                            Laravel
                        </button>
                        <button className="button-edu" style={{marginTop:'10px'}}>
                            HTML
                        </button>
                        <button className="button-edu" style={{marginLeft:'30px'}}>
                            Bootstrap
                        </button>
                        <button className="button-edu">
                            Javascript
                        </button>
                    </div>
                    <div className="url-container">
                        <a href="https://github.com/siefzieq/ITMS-Management-System" target="_blank" rel="noopener noreferrer">
                            Link to Github <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Projects;