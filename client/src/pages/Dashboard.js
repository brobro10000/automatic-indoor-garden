
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Dashboard = () => {
    const [loggedIn,] = useState(Auth.loggedIn())
    const navigate = useNavigate()
    // useEffect(() =>{
    //     if(!loggedIn){
    //         navigate('/')
    //     }
    // });
    return (
        <div className="background">
            <h1>Dashboard</h1>
            <h2>Welcome!</h2>
        </div>
    );
};

export default Dashboard;
