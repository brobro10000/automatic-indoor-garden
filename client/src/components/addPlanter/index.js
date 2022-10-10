import { Image, Grid, Icon } from "semantic-ui-react"
import parallelogram from '../../assets/planters/parallelogram.svg'

export default function AddPlanter() {
    return (
        <Grid className='plant-images'>
            <Grid.Row className='planter-bottom remove-padding'>
                <Image className='planter-size' src={parallelogram} />
            </Grid.Row>
            <Grid.Row className='planter-left remove-padding'>
                <Image className='planter-size' src={parallelogram} />
            </Grid.Row>
            <Grid.Row className='planter-right remove-padding'>
                <Image className='planter-size' src={parallelogram} />
            </Grid.Row>
            <Grid.Row className='remove-padding'>
                <Image className='planter-size' src={parallelogram} />
            </Grid.Row>
        </Grid>
    )
}