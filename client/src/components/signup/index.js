import React, { useState } from 'react'
import { Form, Header, Input, Button } from 'semantic-ui-react'
import { validateEmail, validatePassword } from '../../utils/helpers'
import { CREATE_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

const SignupForm = (animatedClass) => {
    const [submission, setSubmission] = useState({
        email: null, password: null
    })
    const [addUser] = useMutation(CREATE_USER);

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
        const mutationResponse = await addUser({
            variables: {
                email: submission.email,
                password: submission.password
            }
        });
        const token = mutationResponse.data.createUser.token;
        if (token) {
            let classList = document.getElementById('login-modal-container').getAttribute('class').replace(/bounceIn/, 'bounceOut')
            document.getElementById('login-modal-container').setAttribute('class', classList)
            setTimeout(() => {
                Auth.login(token)
            }, 1500)
        }

    }
    return (
        <Form name='signupContent' onSubmit={handleSubmit} className={animatedClass.props}>
            <Header>Sign Up</Header>
            <Form.Field
                required
                id='form-input-control-email'
                name='email'
                control={Input}
                type='email'
                label='Email'
                onChange={updateSubmission}
                placeholder='test@domain.com'
                error={
                    (submission?.email?.split('').length > 0) &&
                    !validateEmail(submission.email) &&
                    { content: "Please enter a valid email address." }
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
                    (submission?.password?.split('').length > 0) &&
                    !validatePassword(submission.password) &&
                    { content: "Password must contain uppercase, lowercase, number and  special character (@$!%*?&)" }
                }
            />
            <Form.Field
                id='form-button-control'
                control={Button}
                name='Submit'
                content='Register'
            />
        </Form>
    )
}

export default SignupForm
