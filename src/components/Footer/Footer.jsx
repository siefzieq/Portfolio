import React from "react";
import "./Footer.css"


const Footer =() =>{

    return(
        <>
            <div className="footer-header">
                &copy; Developed by Hasif Zikry {new Date().getFullYear()}
            </div>
        </>
    )
}
export default Footer;