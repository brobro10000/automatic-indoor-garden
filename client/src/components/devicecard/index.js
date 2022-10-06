
import { Card, Grid } from 'semantic-ui-react'
import { useQuery } from "@apollo/client";
import { QUERY_DEVICES } from '../../utils/queries'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function DeviceCard() {
    const { loading, data, refetch } = useQuery(QUERY_DEVICES);
    const deviceQuery = useSelector((state) => state.query)
    const [devices, setDevices] = useState([])
    useEffect(() => {
        refetch()
        return setDevices(data?.user?.devices)
    }, [refetch, deviceQuery, data])

    return (<>
        {
            loading ? <>Loading</> :
                (<Grid>
                    <Grid.Row>
                        {
                            devices?.map((data, index) => (
                                <Grid.Column
                                    width={4}
                                    key={index + 1}>
                                    <Card
                                        header={data.nickname}
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