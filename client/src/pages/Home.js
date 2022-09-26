// import StarterModal from "./Modal";
import { useState, useEffect } from 'react'
import LoginModal from "../components/loginModal/index.js";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { Container } from "semantic-ui-react"
const Home = () => {
    const [loggedIn,] = useState(Auth.loggedIn())
    const navigate = useNavigate()
    useEffect(() => {
        if (loggedIn) {
            navigate('/dashboard')
        }
    });
    return (
        <Container className="background">
            <LoginModal />
        </Container>
    );
};

export default Home;
