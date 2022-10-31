
import { Card, Grid, Message, Loader, Header, Icon } from 'semantic-ui-react'
import { useQuery } from "@apollo/client";
import { QUERY_DEVICES } from '../../utils/queries'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
export default function DeviceCard() {
    const { loading, data, refetch } = useQuery(QUERY_DEVICES);
    const [classNames] = useState('')
    const navigation = useNavigate()
    const deviceQuery = useSelector((state) => state.query)
    const [devices, setDevices] = useState([])
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    useEffect(() => {
        refetch()
        return setDevices(data?.user?.devices)
    }, [state, refetch, deviceQuery, data, loading, dispatch])
    function animate(e) {
        document.getElementById(e).classList.add('animate__animated', 'animate__pulse')
    }
    function disableAnimate(e) {
        document.getElementById(e).classList.remove('animate__animated', 'animate__pulse')
    }
    async function redirect(data) {
        dispatch({ type: 'saveUUID', uuid: data.uuid })
        if (state.uuid) {
            navigation('/create?uuid=' + data.uuid)
        }

    }
    return (<Grid stackable className='justify-center'>
        <Grid.Row>
            {
                loading ?
                    (
                        <Loader active inline size='big'>Loading</Loader>
                    ) :
                    devices?.length ? (<>
                        {
                            devices?.map((data, index) => (
                                <Grid.Column
                                    width={4}
                                    key={index + 1}>
                                    <Card raised fluid
                                        className='mb-4'
                                        header={data.name}
                                        meta={data.uuid}
                                        description='This is a device'
                                        extra={(
                                            <div onMouseEnter={() => animate(index)} onMouseLeave={() => disableAnimate(index)} className='center-text add-device' onClick={() => redirect(data)}>
                                                <Icon id={index} className={classNames} name='add' size='huge' />
                                                <Header>Click to Manage Plants</Header>
                                            </div>)}
                                    />
                                </Grid.Column>))
                        }
                    </>
                    ) : (
                        <Message size='big' className='center-text' compact>
                            <Message.Header>
                                No Devices
                            </Message.Header>
                            <Message.Content>
                                Click below to add a device
                            </Message.Content>
                        </Message>)
            }
        </Grid.Row>
    </Grid>)
}