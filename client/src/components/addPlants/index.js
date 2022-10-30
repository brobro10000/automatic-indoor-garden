import React, { useState } from "react"
import { arrayOfNumbers } from "../../utils/helpers"
import { Header, Form, Input, Button, Accordion, Icon, Container, Grid } from 'semantic-ui-react'
const AddPlantForm = () => {
    const [index, setIndex] = useState(false)
    const [submission, setSubmission] = useState({})
    const [indexValue, setIndexValue] = useState(-1)
    const totalPlants = arrayOfNumbers(4)
    const setActive = (element) => {
        if (element === indexValue) {
            return setIndexValue(-1)
        }
        setIndexValue(element)
    }

    const updateSubmission = (e) => {
        e.preventDefault()
        console.log(submission)
        return setSubmission({ ...submission, [e.target.name]: e.target.value })
    }
    const handleSubmit = (element) => {
        const plantData = {
            name: submission[`name-${element}`],
            temperature: submission[`temperature-${element}`] || -1,
            humidity: submission[`humidity-${element}`] || -1,
            pH: submission[`pH-${element}`] || -1,
        }
        console.log(plantData)
    }
    return (
        <Accordion>
            <Grid stackable relaxed><Grid.Row>
                {totalPlants.map(element => (
                    <Grid.Column width={4} key={element + 1}>
                        <Accordion.Title
                            active={indexValue === element}
                            index={element}
                            onClick={() => setActive(element)}
                        >
                            <Icon name='dropdown' /> Add Plant #{element + 1}
                        </Accordion.Title>
                        <Accordion.Content active={indexValue === element}>
                            <Form name='plantContent' onSubmit={() => handleSubmit(element)}>
                                <Header>Enter Plant Information</Header>
                                <Form.Field
                                    required
                                    id='form-input-control-type'
                                    name={`name-${element}`}
                                    control={Input}
                                    onChange={updateSubmission}
                                    label='Type of Plant'
                                />
                                <Form.Field
                                    id='form-input-control-temperature'
                                    name={`temperature-${element}`}
                                    control={Input}
                                    onChange={updateSubmission}
                                    label='Ideal Temperature (Fahrenheit)'

                                />
                                <Form.Field
                                    id='form-input-control-pH'
                                    name={`pH-${element}`}
                                    control={Input}
                                    onChange={updateSubmission}
                                    label='Ideal pH'
                                />
                                <Form.Field
                                    id='form-input-control-humidity'
                                    name={`humidity-${element}`}
                                    control={Input}
                                    onChange={updateSubmission}
                                    label='Ideal Humidity'
                                />
                                <Form.Field
                                    id='form-button-control'
                                    control={Button}
                                    name='Submit'
                                    content='Submit'
                                />
                            </Form >
                        </Accordion.Content>
                    </Grid.Column>)
                )}
            </Grid.Row></Grid>
        </Accordion>

    )
}

export default AddPlantForm