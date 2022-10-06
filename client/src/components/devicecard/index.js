
import { Card, Grid } from 'semantic-ui-react'
import { useQuery } from "@apollo/client";
import { QUERY_DEVICES } from '../../utils/queries'
import { useState, useEffect } from 'react'

export default function DeviceCard() {
    const { loading, data } = useQuery(QUERY_DEVICES);
    const [devices, setDevices] = useState([])
    useEffect(() => {
        if (!loading) {
            setDevices(data.user.devices)
        }
    }, [loading, data])

    return (<>
        {
            loading ? <>Loading</> :
                (<Grid>
                    <Grid.Row>
                        {
                            devices.map((data, index) => (
                                <Grid.Column
                                    width={4}
                                    key={index + 1}>
                                    <Card
                                        header={data.name}
                                        meta={data.uuid}
                                        description={data.uuid}
                                    />
                                </Grid.Column>))
                        }
                    </Grid.Row>
                </Grid>)
        }
    </>
    )
}