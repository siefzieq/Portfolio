import React, {useEffect, useState} from "react";
import "./Experience.css";

const Experience = () =>{

    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const[isLeftVisible,setIsLeftVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerSection = document.querySelector('.header-edu');
            const contentSection = document.querySelector('.canvas-2-exp');
            const leftSection = document.querySelector('.canvas-1-exp');

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
            <div className="header-exp">
                <i className={`bi bi-person-workspace ${isHeaderVisible ? 'fade-slide-in' : ''}`}></i>
                <h1 className={`${isHeaderVisible ? 'fade-slide-in': ''}`}>Experience</h1>
                <div className="grid-exp">
                    <div className={`canvas-1-exp ${isLeftVisible ? 'slide-in-left':''}`} style={{outline: '3px solid #FFFFFF'}}>
                        <h4 style={{width:'218px'}}>Petronas Digital Sdn Bhd</h4>
                    </div>
                    <div className={`canvas-2-exp ${isContentVisible ? 'slide-in-right':''}`}>
                        <p>
                            <ul className="u-list-exp">
                                <h2 style={{marginLeft:'-30px'}}>Software Engineer Intern</h2>
                                <p>Jul 2023 - Sep 2023 (3 Months)</p>
                                <li className="l-list-exp">
                                    Developed a service booking system using Microsoft PowerApps, integrated with Microsoft 365
                                    products, that can cater requests from more than 20 Departments within three months.
                                </li>
                                <li className="l-list-exp">
                                    Designed two user interface drafts, incorporating feedback from supervisor for a user-centered
                                    approach.
                                </li>
                                <li className="l-list-exp">
                                    Led user testing session with over 10 participants, gathering critical feedback for
                                    system’s enhancement within the same and other departments.
                                </li>
                                <li className="l-list-exp">
                                    Collaborated with UI/UX designers in creating the user interfaces of AVP Service Request System,
                                    which aligned with Emerald Hue, Petronas Design Guidelines.
                                </li>
                            </ul>
                        </p>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Experience;