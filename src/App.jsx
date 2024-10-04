import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Main />
            </Router>
            <Footer/>
        </>

    );
}

export default App;
