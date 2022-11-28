import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Divider, Grid } from "semantic-ui-react"

const Manage = () => {
    const [loggedIn,] = useState(Auth.loggedIn())
    const [data1, setData1] = useState([])
    const navigate = useNavigate()
    if (data1.length === 0) {
        const x = fetch('https://retoolapi.dev/nLNNyy/AIG').then(res => res.json()).then(data => {
            console.log(data)
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
    console.log(data1)
    return (
        <>
            {data1 && <Container>
                <h2>{data1.deviceID}</h2>
                <h3>Temperature:<span> {data1.temperature} </span></h3>
                <h3>Humidity:<span> {data1.humidity} </span></h3>
                <Divider section></Divider>
                <Grid.Row>
                    <Grid.Column>
                        <h3>Lights:<span> {data1.lights ? "On" : "Off"} </span></h3>
                        <h3>UV Lights:<span> {data1.uvLight ? "On" : "Off"} </span></h3>
                        <h3>Water Pump:<span> {data1.waterPump ? "On" : "Off"} </span></h3>
                        <h3>Water Level:<span> {data1.waterLevel ? "Good" : "Low"} </span></h3>
                    </Grid.Column>
                </Grid.Row>
            </Container>}
        </>
    );
};

export default Manage;
