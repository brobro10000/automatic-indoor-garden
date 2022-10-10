
import { Card, Grid, Message, Dimmer, Loader, Icon, Header } from 'semantic-ui-react'
import { useQuery } from "@apollo/client";
import { QUERY_DEVICES } from '../../utils/queries'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function DeviceCard() {
    const { loading, data, refetch } = useQuery(QUERY_DEVICES);
    const deviceQuery = useSelector((state) => state.query)
    const [devices, setDevices] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        refetch()
        return setDevices(data?.user?.devices)
    }, [refetch, deviceQuery, data, loading])

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
                                        extra={(<div className='center-text' onClick={() => dispatch({ type: 'openPlant' })}>
                                            <Icon name='add' size='huge' />
                                            <Header>Click to add a Plant</Header>
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