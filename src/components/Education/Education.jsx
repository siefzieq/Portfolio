import React, { useEffect, useState } from "react";
import "./Education.css";

const Education = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerSection = document.querySelector('.header-edu');
            const contentSection = document.querySelector('.canvas-2-container');

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
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="header-edu">
                {/* Apply fade-slide-in based on header visibility */}
                <i className={`bi bi-mortarboard ${isHeaderVisible ? 'fade-slide-in' : ''}`}></i>
                <h1 className={`${isHeaderVisible ? 'fade-slide-in' : ''}`}>Education</h1>
                <div className="grid-edu">
                    <hr className="vertical-line" />
                    {/* Apply slide-in-right based on content visibility */}
                    <div className={`canvas-2-container ${isContentVisible ? 'slide-in-right' : ''}`}>
                        <h3>2021-2024</h3>
                        <div className="canvas-2-edu">
                            <h2>Universiti Tenaga Nasional, Kajang</h2>
                            <p>Bachelor of Computer Science (Software Engineering) (Hons.)</p>
                            <p>Grade: 3.98</p>
                        </div>
                        <h3>2020-2021</h3>
                        <div className="canvas-2-edu">
                            <h2>Universiti Tenaga Nasional, Kajang</h2>
                            <p>Foundation of Computer Science</p>
                            <p>Grade: 4.00</p>
                        </div>
                        <h3>2018-2019</h3>
                        <div className="canvas-2-edu">
                            <h2>Kolej Islam Sultan Alam Shah</h2>
                            <p>Science & Religious Stream</p>
                            <p>Grade: 11A (8A+ 3A)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;
