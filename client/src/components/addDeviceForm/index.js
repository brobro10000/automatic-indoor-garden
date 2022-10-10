import { Form, Input, Button } from 'semantic-ui-react'
import { ADD_DEVICE } from '../../utils/mutations'
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function AddDeviceForm() {
    const [submission, setSubmission] = useState({
        uuid: null
    })
    const [addDevice] = useMutation(ADD_DEVICE);
    const dispatch = useDispatch();
    const updateSubmission = (e) => {
        e.preventDefault()
        return setSubmission({ ...submission, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (Auth.loggedIn()) {
            const mutationResponse = await addDevice({
                variables: {
                    uuid: submission.uuid,
                    name: submission.name
                }
            })
            if (mutationResponse) {
                dispatch({ type: 'closeDevice' })
                dispatch({ type: 'updateQuery', query: mutationResponse.data.addDevice })
            }
        }
    }

    return (
        <Form name='deviceIDContent' onSubmit={handleSubmit}>
            <Form.Field
                required
                id='form-input-control-device-id'
                name='uuid'
                control={Input}
                type=''
                onChange={updateSubmission}
                label='Device ID'
            />
            <Form.Field
                required
                id='form-input-control-device-id'
                name='name'
                control={Input}
                type=''
                onChange={updateSubmission}
                label='Nickname'
            />
            <Form.Field
                id='form-button-control'
                control={Button}
                name='Submit'
                content='Submit'
            />
        </Form >

    )
}