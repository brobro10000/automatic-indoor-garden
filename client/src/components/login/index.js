import React, { useState } from 'react'

import { Header, Form, Input, Button } from 'semantic-ui-react'
import { validateEmail, validatePassword } from '../../utils/helpers'
import { LOGIN } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

const LoginForm = (animatedClass) => {

    const [submission, setSubmission] = useState({
        email: null, password: null
    })

    const [login] = useMutation(LOGIN);
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
    const handleSubmit = async (e) => {
        e.preventDefault()

        const mutationResponse = await login({
            variables: {
                email: submission.email,
                password: submission.password
            }
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token)
        let classList = document.getElementById('login-modal-container').getAttribute('class').replace(/bounceIn/, 'bounceOut')
        document.getElementById('login-modal-container').setAttribute('class', classList)
        setTimeout(() => {
            window.location.assign('/dashboard');
        }, 1500)
    }
    return (
        <Form name='loginContent' onSubmit={handleSubmit} className={animatedClass.props}>
            <Header> Login</Header>
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
        </Form >
    )
}

export default LoginForm
