import React from "react"
import AddPlantForm from "../components/addPlants"
import { Container, Divider } from "semantic-ui-react"
import PageHeader from "../components/pageheader"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Auth from "../utils/auth";
import Plants from "../components/plants";
const CreatePlants = () => {
    const [loggedIn,] = useState(Auth.loggedIn())
    const navigate = useNavigate()
    useEffect(() => {
        if (!loggedIn) {
            navigate('/')
        }
    });
    return (
        <>
            <PageHeader data-pageheader='container'>
                Create Plant
            </PageHeader>
            <Container>
                <Plants />
                <Divider section />
                <AddPlantForm />
            </Container>
        </>
    )
}

export default CreatePlants