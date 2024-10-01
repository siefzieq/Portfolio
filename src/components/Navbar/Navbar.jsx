// Navbar.jsx
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="logo" style={{fontSize:'40px'}}>HZ.</h2>
            <ul className="list">
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#achievements">Awards</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
