import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Helmet } from 'react-helmet';

function App() {
    return (
        <>
            <Router>
                <Helmet>
                    <title>Hasif Zikry</title>
                </Helmet>
                <Navbar />
                <Main />
            </Router>
        </>

    );
}

export default App;
