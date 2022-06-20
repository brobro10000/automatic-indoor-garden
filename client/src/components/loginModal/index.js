import React, { useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Login from '../login/index'
import SignUp from '../signup/index'

export default function ButtonExampleButton() {
    const [open, setOpen] = useState(true)
    const [showForm, setForm] = useState(<></>)


    return (
        <Modal
            closeOnDimmerClick={false}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Modal.Header>
                Welcome to your Garden
            </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    {showForm}
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions data-modal="login-button-group">
                <div data-modal='login-left-button'>
                    <Button
                        color='black'
                        // labalposition='top'
                        onClick={() => setForm(<></>)}>
                        About
                    </Button>
                </div>
                <div data-modal='login-right-button'>
                    <Button color='black' onClick={() => setForm(<Login />)}>
                        Login
                    </Button>
                    <Button color='black' onClick={() => setForm(<SignUp />)}>
                        Sign Up
                    </Button>
                </div>
            </Modal.Actions>
        </Modal >
    )
} 