import React from "react"
import AddPlantForm from "../components/addPlants"
import { Container } from "semantic-ui-react"
import PageHeader from "../components/pageheader"

const CreatePlants = () => {
    return (
        <>
            <PageHeader data-pageheader='container'>
                Create Plant
            </PageHeader>
            <Container>
                <AddPlantForm />
            </Container>
        </>
    )
}

export default CreatePlants