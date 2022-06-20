import React, { useState } from 'react'
import { Header, Form, Input, Button } from 'semantic-ui-react'
import { validateEmail, validatePassword } from '../../utils/helpers'


const LoginForm = () => {
    const [submission, setSubmission] = useState({
        email: null, password: null
    })
    const updateSubmission = (e) => {
        e.preventDefault()
        if (e.target.name === 'email') {
            validateEmail(e.target.value)
        }
        if (e.target.name === 'password') {
            validatePassword(e.target.value)
        }
        return setSubmission({ ...submission, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <Form onSubmit={handleSubmit}>
            <Header>Login</Header>
            <Form.Field
                required
                id='form-input-control-email'
                name='email'
                control={Input}
                type='email'
                label='Email'
                onChange={updateSubmission}
                error={
                    (submission?.email?.split('').length > 0) && !validateEmail(submission.email)
                }
            />
            <Form.Field
                required
                id='form-input-control-password'
                name='password'
                control={Input}
                type='password'
                label='Password'
                onChange={updateSubmission}
                error={
                    (submission?.password?.split('').length > 0) && !validatePassword(submission.password)
                }
            />
            <Form.Field
                id='form-button-control'
                control={Button}
                name='Submit'
                content='Submit'
            />
        </Form>
    )
}

export default LoginForm
