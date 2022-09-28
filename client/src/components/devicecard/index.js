import { Card, Grid } from 'semantic-ui-react'
import { useQuery } from "@apollo/client";
import { QUERY_DEVICES } from '../../utils/queries'
export default function DeviceCard() {
    const { loading, data } = useQuery(QUERY_DEVICES);
    const devices = data?.user?.devices || [];
    console.log(devices)
    return (
        <Grid>
            {
                devices.map((data, index) => (<Card
                    header={'Devices ' + index + 1}
                    meta='Friend'
                    description={data.uuid}
                />))
            }
        </Grid>)
}