import { Icon, Header, Modal } from 'semantic-ui-react'
import AddDeviceForm from '../addDeviceForm'
import { useSelector, useDispatch } from 'react-redux'
export default function AddDevice() {
    const open = useSelector((state) => state.open)
    const dispatch = useDispatch();
    return (
        <>
            <Modal
                open={open}
                onClose={() => dispatch({ type: 'close' })}
            >
                <Modal.Header className='center-text'>Add Device ID</Modal.Header>
                <Modal.Content>
                    <AddDeviceForm />
                </Modal.Content>
            </Modal>
            <div className='center-text add-device' onClick={() => dispatch({ type: 'open' })}>
                <Icon name='add' size='huge' />
                <Header>Click to add a device</Header>
            </div>
        </>

    )
}