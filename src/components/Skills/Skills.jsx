import React, {useEffect, useState} from "react";
import "./Skills.css"

const Skills =() =>{

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.header-skills');
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
        <>
            <div className="header-skills">
                <i className={`bi bi-tools ${isVisible ? 'fade-slide-in':''}`}></i>
                <h1 className={`${isVisible ? 'fade-slide-in':''}`}>Skills & Tools</h1>
                <div className="grid-skills">
                    <div className="canvas-2-skills">
                        <h2>Others</h2>
                        <div className="canvas-2-image">
                            <img src="https://img.icons8.com/?size=512&id=OU2ddOKw840K&format=png" height="80px"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Microsoft_Power_Automate.svg/2048px-Microsoft_Power_Automate.svg.png" height="80px"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png" height="80px" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0Tw_j8_e2nBjxCVFTjfF0hBJrptR-gcCiA&s" height="80px"/>
                            <img src="https://img.icons8.com/color/512/tableau-software.png" height="80px" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/630px-New_Power_BI_Logo.svg.png" height="80px" />
                            <img src="https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" height="80px" />
                        </div>
                    </div>
                    <div className="canvas-2-skills">
                        <h2>Front End Development</h2>
                        <div className="canvas-2-image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="HTML Logo" height="70px" width="70px"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS Logo" height="80px" width="80px"/>
                            <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="React Logo" height="70px" width="70px"/>
                            <img src="https://logo-download.com/wp-content/data/images/svg/Bootstrap-logo.svg" height="80px" width="70px"/>
                            <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript Logo" height="70px" width="70px"/>
                        </div>
                    </div>
                    <div className="canvas-2-skills">
                        <h2>Back End Development</h2>
                        <div className="canvas-2-image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="Laravel Logo" height="70px"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png" alt="C++ Logo" height="70px"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C Logo" height="70px"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="C Logo" height="70px"/>
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" height="70px"/>
                        </div>
                    </div>
                    <div className="canvas-2-skills">
                        <h2 style={{marginLeft:"20%"}}>Database</h2>
                        <div className="canvas-2-image" style={{ justifyContent: "center" }}>
                            <img src="https://www.svgrepo.com/show/303251/mysql-logo.svg" style={{ height: "90px", margin: "0 10px",transform: "scale(1.5)"}} />
                            <img src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" style={{ height: "80px", margin: "0 5px" }} />
                        </div>
                    </div>
                    <div className="canvas-2-skills">
                        <h2>Others</h2>
                        <div className="canvas-2-image">
                            <img src="https://img.icons8.com/?size=512&id=OU2ddOKw840K&format=png" height="80px"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Microsoft_Power_Automate.svg/2048px-Microsoft_Power_Automate.svg.png" height="80px"/>
                            <img src="https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png" height="80px" />
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" height="80px"/>
                            <img src="https://img.icons8.com/color/512/tableau-software.png" height="80px" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/630px-New_Power_BI_Logo.svg.png" height="80px" />
                            <img src="https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" height="80px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills;