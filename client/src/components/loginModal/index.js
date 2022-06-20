import React, { useState } from 'react'
import { Button, Modal, Container } from 'semantic-ui-react'
import Login from '../login/index'
import SignUp from '../signup/index'

export default function ButtonExampleButton() {
    const [open, setOpen] = useState(true)
    const [showForm, setForm] = useState(<></>)
    var [number, setNumber] = useState(0)

    function displayAndAnimate(e) {
        if (e.target.name === 'login') {
            if (number !== 0) {
                e.target.setAttribute('disabled', true)
                document.getElementsByName('signup')[0].removeAttribute('disabled')
                setForm(<SignUp props={'animate__animated animate__bounceOutLeft'} />)
            } else {
                e.target.setAttribute('disabled', true)
                setNumber(1)
            }
            setTimeout(() => {
                setForm(<Login props={'animate__animated animate__bounceInRight'} />)
            }, 500)
        } else if (e.target.name === 'signup') {
            if (number !== 0) {
                e.target.setAttribute('disabled', true)
                document.getElementsByName('login')[0].removeAttribute('disabled')
                setForm(<Login props={'animate__animated animate__bounceOutLeft'} />)
            } else {
                e.target.setAttribute('disabled', true)
                setNumber(1)
            }
            setTimeout(() => {
                setForm(<SignUp props={'animate__animated animate__bounceInRight'} />)
            }, 500)
        }
    }

    return (
        <Container fluid>
            <Modal className='animate__animated animate__bounceIn'
                id='login-modal-container'
                closeOnDimmerClick={false}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
            >
                <Modal.Header>
                    Welcome to your Garden
                </Modal.Header>
                <Modal.Content className='overflowAnimate'>
                    <Modal.Description>
                        {showForm}
                    </Modal.Description>
                </Modal.Content>
                <hr></hr>
                <div data-modal="login-button-group">
                    <div data-modal='login-left-button'>
                        <Button
                            color='black'
                            onClick={() => setForm(<></>)}>
                            About
                        </Button>
                    </div>
                    <div data-modal='login-right-button'>
                        <Button name='login' color='black' onClick={displayAndAnimate}>
                            Login
                        </Button>
                        <Button name='signup' color='black' onClick={displayAndAnimate}>
                            Sign Up
                        </Button>
                    </div>
                </div>
            </Modal >
        </Container>
    )
} 