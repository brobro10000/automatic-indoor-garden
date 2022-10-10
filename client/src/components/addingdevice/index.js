import { Icon, Header, Modal, Container, Divider } from 'semantic-ui-react'
import AddDeviceForm from '../addDeviceForm'
import { useSelector, useDispatch } from 'react-redux'
import DeviceCard from '../devicecard'
export default function AddDevice() {
    const open = useSelector((state) => state.openDevice)
    const dispatch = useDispatch();
    return (
        <>
            <Modal
                open={open}
                onClose={() => dispatch({ type: 'closeDevice' })}
            >
                <Modal.Header className='center-text'>Add Device ID</Modal.Header>
                <Modal.Content>
                    <AddDeviceForm />
                </Modal.Content>
            </Modal>
            <Container>
                <DeviceCard />
            </Container>
            <Divider section />
            <div className='center-text add-device' onClick={() => dispatch({ type: 'openDevice' })}>
                <Icon name='add' size='huge' />
                <Header>Click to add a device</Header>
            </div>
        </>

    )
}