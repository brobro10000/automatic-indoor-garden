import React, { useState } from "react"
import { arrayOfNumbers } from "../../utils/helpers"
import { Header, Form, Input, Button, Accordion, Icon, Grid } from 'semantic-ui-react'
import { useMutation } from '@apollo/client';
import { ADD_PLANT } from '../../utils/mutations';
import Auth from "../../utils/auth";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux'

const AddPlantForm = () => {
    const [submission, setSubmission] = useState({})
    const [indexValue, setIndexValue] = useState(-1)
    const totalPlants = arrayOfNumbers(4)
    const [createPlant] = useMutation(ADD_PLANT);
    const location = useLocation();
    const dispatch = useDispatch()
    const setActive = (element) => {
        if (element === indexValue) {
            return setIndexValue(-1)
        }
        setIndexValue(element)
    }
    const updateSubmission = (e) => {
        e.preventDefault()
        return setSubmission({ ...submission, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (element) => {
        const pH = parseFloat(parseFloat(submission[`pH-${element}`]).toFixed(2))
        const plantData = {
            name: submission[`name-${element}`],
            position: element,
            uuid: new URLSearchParams(location.search).get('uuid'),
            temperature: parseInt(submission[`temperature-${element}`]) || -1,
            pH: pH || -1,
            humidity: parseInt(submission[`humidity-${element}`]) || -1,
        }
        if (Auth.loggedIn()) {
            const mutationResponse = await createPlant({
                variables: plantData
            })
            if (mutationResponse) {
                dispatch({ type: 'updateQuery', query: mutationResponse.data.addDevice })
                return alert('Plant Added')
            }
        }
        return alert('Your session has expired. Please log in to create a plant')
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