import { Header, Image, Grid, Divider, Container } from 'semantic-ui-react';
import greenhouse from '../../assets/logo/greenhouse.svg'


export default function PageHeader({ children }) {
    return (
        <Container data-pageheader="container">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2} textAlign='center'>
                        <Image alt="Homepage Logo" src={greenhouse} size='small' spaced />
                    </Grid.Column>
                    <Grid.Column data-pageheader="header-text" width={14}>
                        <Header className='center-text' size='large'>{children}</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider section />
        </Container>
    )
}