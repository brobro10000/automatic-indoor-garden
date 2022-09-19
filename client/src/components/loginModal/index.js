import React, { useState, useEffect } from 'react'
import { Button, Modal, Container, Divider, Segment } from 'semantic-ui-react'
import Login from '../login/index'
import SignUp from '../signup/index'
import About from '../about/index'
export default function LoginModal() {
    const [open, setOpen] = useState(true)
    const [showForm, setForm] = useState(<About props={'animate__animated animate__bounceIn'}></About>)
    useEffect(() => {
        document.getElementsByName('about')[0].setAttribute('disabled', true)
    }, [])

    function enableElement(elementName) {
        return document.getElementsByName(elementName)[0].removeAttribute('disabled')
    }

    function displayAndAnimate(e) {
        if (e.target.name === 'login') {
            e.target.setAttribute('disabled', true)
            enableElement('signup')
            enableElement('about')
            if (showForm.type.name === 'SignupForm') {
                setForm(<SignUp props={'animate__animated animate__bounceOutLeft'} />)
            } else if (showForm.type.name === 'About') {
                setForm(<About props={'animate__animated animate__bounceOutLeft'} />)
            }
            setTimeout(() => {
                setForm(<Login props={'animate__animated animate__bounceInRight'} />)
            }, 500)
        }
        if (e.target.name === 'signup') {
            e.target.setAttribute('disabled', true)
            enableElement('login')
            enableElement('about')
            if (showForm.type.name === 'LoginForm') {
                setForm(<Login props={'animate__animated animate__bounceOutLeft'} />)
            } else if (showForm.type.name === 'About') {
                setForm(<About props={'animate__animated animate__bounceOutLeft'} />)
            }
            setTimeout(() => {
                setForm(<SignUp props={'animate__animated animate__bounceInRight'} />)
            }, 500)
        }
        if (e.target.name === 'about') {
            e.target.setAttribute('disabled', true)
            enableElement('login')
            enableElement('signup')
            if (showForm.type.name === 'LoginForm') {
                setForm(<Login props={'animate__animated animate__bounceOutLeft'} />)
            } else if (showForm.type.name === 'SignupForm') {
                setForm(<SignUp props={'animate__animated animate__bounceOutLeft'} />)
            }
            setTimeout(() => {
                setForm(<About props={'animate__animated animate__bounceInRight'} />)
            }, 750)
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
                <Modal.Header className='center-text'>
                    Welcome to your Garden
                </Modal.Header>
                <Modal.Content className='overflowAnimate'>
                    <Modal.Description>
                        <Segment>
                            {showForm}
                        </Segment>
                    </Modal.Description>
                </Modal.Content>
                <Divider horizontal>Navigation</Divider>
                <div data-modal="login-button-group">
                    <div data-modal='login-left-button'>
                        <Button
                            name='about'
                            color='black'
                            onClick={displayAndAnimate}
                        >
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