
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
        fetch('https://retoolapi.dev/nLNNyy/AIG').then(res => res.json()).then(data => {
            data.forEach((element, index) => {
                if (element.deviceID === "UCF-SD-2022") {
                    return data[index]
                }
            })
        })
    });
    return (
        <>
            <PageHeader data-pageheader='container'>
                Dashboard
            </PageHeader>
            <Container>
                <AddDevice />
                <Divider section></Divider>
            </Container>

        </>
    );
};

export default Dashboard;
