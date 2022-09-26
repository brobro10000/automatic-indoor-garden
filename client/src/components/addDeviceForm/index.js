import { Form, Input } from 'semantic-ui-react'

export default function AddDeviceForm() {
    return (
        <Form name='loginContent'>
            <Form.Field
                required
                id='form-input-control-email'
                name='email'
                control={Input}
                type='email'
                label='Device ID'
            />
        </Form >

    )
}