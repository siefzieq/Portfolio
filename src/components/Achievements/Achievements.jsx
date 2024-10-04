import React, {useEffect, useState} from "react";
import "./Achievements.css";

const Achievements = () =>{

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.header-achieve');
            const rect = aboutSection.getBoundingClientRect();
            // Check if the section is in the viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <>
            <div className={`header-achieve ${isVisible ? 'fade-slide-in' : ''}`}>
                <i className="bi bi-trophy" style={{paddingLeft:"43%"}}></i>
                <h1>Achievements & Awards</h1>
                <div className="grid-achieve">
                    <div className="canvas-2">
                        <i className="bi bi-1-circle"></i>
                        <h2>Best Presentation</h2>
                        <p>Asian Youth Leaders Travel & Learning Camp </p>
                        <p>NUS, Singapore</p>
                    </div>
                    <div className="canvas-2">
                        <i className="bi bi-2-circle"></i>
                        <h2>Dean List Award</h2>
                        <p>9 Consecutive Semester of Bachelor's Degree </p>
                        <p>UNITEN, Malaysia</p>
                    </div>
                    <div className="canvas-2">
                        <i className="bi bi-3-circle"></i>
                        <h2>Dean List Award</h2>
                        <p>3 Consecutive Semester of Foundation </p>
                        <p>UNITEN, Malaysia</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Achievements;