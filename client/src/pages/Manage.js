import Auth from "../utils/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Divider, Button, Grid } from "semantic-ui-react"
import PageHeader from "../components/pageheader";
const Manage = () => {
    const [loggedIn,] = useState(Auth.loggedIn())
    const [data1, setData1] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    if (data1.length === 0) {
        const x = fetch('https://retoolapi.dev/nLNNyy/AIG').then(res => res.json()).then(data => {
            data.forEach((element, index) => {
                if (element.deviceID === "UCF-SD-2022") {
                    setData1(data[index])
                }
            })
        })
        setData1(x)
    }
    useEffect(() => {
        if (!loggedIn) {
            navigate('/')
        }
    });
    function toggleLights() {
        setData1({ ...data1, light: !data1.light })
        fetch(`https://retoolapi.dev/nLNNyy/AIG/${data1.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data1)
        });
    }
    function toggleUV() {
        setData1({ ...data1, uvLight: !data1.uvLight })
        fetch(`https://retoolapi.dev/nLNNyy/AIG/${data1.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data1)
        });
    }
    function togglePump() {
        setData1({ ...data1, waterPump: !data1.waterPump })
        fetch(`https://retoolapi.dev/nLNNyy/AIG/${data1.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data1)
        });
    }
    return (
        <>
            <PageHeader data-pageheader='container'>
                Manage Plants
            </PageHeader>
            {new URLSearchParams(location.search).get("uuid") === data1.deviceID ? <Container>
                <h2>Device ID: {data1.deviceID}</h2>
                <h3>Temperature:<span> {data1.temperature}°F </span></h3>
                <h3>Humidity:<span> {data1.humidity}% </span></h3>
                <h3>Water Level:<span> {data1.waterLevel ? "Good" : "Low"} </span></h3>
                <Divider section></Divider>
                <Grid.Row className="dflex justify-center">
                    <Grid.Column>
                        <Button onClick={() => toggleLights()} className='m-4'><h3>Lights:<span> {data1.light ? "On" : "Off"} </span></h3></Button>
                        <Button onClick={() => toggleUV()} className='m-4'><h3>UV Lights:<span> {data1.uvLight ? "On" : "Off"} </span></h3></Button>
                        <Button onClick={() => togglePump()} className='m-4'><h3>Water Pump:<span> {data1.waterPump ? "On" : "Off"} </span></h3></Button>
                    </Grid.Column>
                </Grid.Row>
            </Container> :
                <Container className='center-text'>
                    <h2>Device named "{new URLSearchParams(location.search).get("uuid")}" not found</h2>
                </Container>}
        </>
    );
};

export default Manage;
