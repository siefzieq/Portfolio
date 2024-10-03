import React from "react";
import "./Main.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {assets} from "../../assets/assets.js";
import About from '../About/About.jsx';
import Experience from '../Experience/Experience.jsx';
import Achievements from '../Achievements/Achievements.jsx';
import Education from '../Education/Education.jsx';
import Projects from '../Projects/Projects.jsx';
import Skills from '../Skills/Skills.jsx';

const Main = () => {

    return (
        <>
            <div className="header-main">
                <h1>Hello, I am Hasif Zikry <span className="wave-emoji">👋</span></h1>
            </div>

            {/* Grid for profile details */}
            <div className="bento-container">
                <div className="bento-grid">
                    <div className="item-1">
                        <div className="header">
                            <div className="picture-container">
                                <img src={assets.picture} alt="profile_picture"/>
                            </div>
                            <h2>A Portfolio of Innovative Ideas</h2>
                            <i style={{ paddingLeft: '30px' }}>Hasif Zikry &gt;</i>
                            <button onClick={() => window.open('https://drive.google.com/file/d/1LhJhUUxxTqVUz0TkQllgooC0MpUI9t6D/view', '_blank')}>Resume</button>
                        </div>
                    </div>
                    <div className="item-2">
                        <div className="header-1">
                            <h2>Education</h2>
                            <i className="bi bi-mortarboard"></i>
                            <p>Universiti Tenaga Nasional, Kajang</p>
                        </div>
                    </div>
                    {/* Contact and Social Links */}
                    <div className="item-3">
                        <a href="mailto:muhdhasifzikry02@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <i className="bi bi-envelope-fill" style={{ fontSize: '32px' }}></i>
                        </a>
                    </div>
                    <div className="item-4">
                        <a href="https://www.linkedin.com/in/muhammad-hasif-zikry-mohd-ridzwan/" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <i className="bi bi-linkedin" style={{ fontSize: '32px' }}></i>
                        </a>
                    </div>
                    <div className="item-5">
                        <a href="https://github.com/siefzieq" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <i className="bi bi-github" style={{ fontSize: '32px' }}></i>
                        </a>
                    </div>
                    <div className="item-6">
                        <a href="https://twitter.com/siefzieq" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <i className="bi bi-twitter" style={{ fontSize: '32px' }}></i>
                        </a>
                    </div>

                    {/* Location */}
                    <div className="item-7">
                        <div className="header-1">
                            <h2>Based In</h2>
                            <i className="bi bi-house"></i>
                            <p>Seremban, Negeri Sembilan, Malaysia</p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="item-8">
                        <div className="header">
                            <h2>Skills</h2>
                            <i className="bi bi-tools" style={{cursor:"auto"}}></i>
                            <p>Python</p>
                            <p>JavaScript</p>
                            <p>PHP</p>
                            <p>Laravel</p>
                            <p>React</p>
                            <p>Bootstrap</p>
                            <p>Git</p>
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <section id="about">
                    <About />
                </section>
                <section id="education">
                    <Education />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="achievements">
                    <Achievements />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="skills">
                    <Skills />
                </section>
            </div>
        </>
    );
}

export default Main;
