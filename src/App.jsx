import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Helmet } from 'react-helmet';
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <>
            <Router>
                <Helmet>
                    <title>Hasif Zikry</title>
                    <link rel="icon" href="/hasif.jpg" />
                </Helmet>
                <Navbar />
                <Main />
            </Router>
            <Footer/>
        </>

    );
}

export default App;
