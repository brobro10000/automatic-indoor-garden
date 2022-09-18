// import StarterModal from "./Modal";
import { useState, useEffect } from 'react'
import LoginModal from "../components/loginModal/index.js";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [loggedIn,] = useState(Auth.loggedIn())
    const navigate = useNavigate()
    useEffect(() => {
        if (loggedIn) {
            navigate('/dashboard')
        }
    });
    return (
        <div className="background">
            <LoginModal />
        </div>
    );
};

export default Home;
