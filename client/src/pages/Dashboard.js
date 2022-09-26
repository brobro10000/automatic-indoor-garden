
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Divider } from "semantic-ui-react"
import PageHeader from "../components/pageheader";
import AddDevice from "../components/addingdevice";
const Dashboard = () => {
    const [loggedIn,] = useState(Auth.loggedIn())
    const navigate = useNavigate()
    useEffect(() => {
        if (!loggedIn) {
            navigate('/')
        }
    });
    return (
        <>
            <PageHeader data-pageheader='container'></PageHeader>
            <Container>
                <AddDevice />
                <Divider section></Divider>
            </Container>

        </>
    );
};

export default Dashboard;
