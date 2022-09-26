import { Icon, Header, Modal, Button } from 'semantic-ui-react'
import { useReducer } from 'react'
import AddDeviceForm from '../addDeviceForm'
function exampleReducer(state, action) {
    switch (action.type) {
        case 'close':
            return { open: false }
        case 'open':
            return { open: true, size: action.size }
        default:
            throw new Error('Unsupported action...')
    }
}

export default function AddDevice() {
    const [state, dispatch] = useReducer(exampleReducer, {
        open: false,
        size: undefined,
    })
    const { open, size } = state
    return (
        <>
            <Modal
                size={size}
                open={open}
                onClose={() => dispatch({ type: 'close' })}
            >
                <Modal.Header className='center-text'>Add Device ID</Modal.Header>
                <Modal.Content>
                    <AddDeviceForm />
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => dispatch({ type: 'close' })}>
                        No
                    </Button>
                    <Button positive onClick={() => dispatch({ type: 'close' })}>
                        Yes
                    </Button>
                </Modal.Actions>
            </Modal>
            <div className='center-text add-device' onClick={() => dispatch({ type: 'open', size: 'small' })}>
                <Icon name='add' size='huge' />
                <Header>Click to add a device</Header>
            </div>
        </>

    )
}