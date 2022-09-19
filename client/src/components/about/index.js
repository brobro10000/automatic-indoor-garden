import React from 'react'
import { Image, Grid, Header } from 'semantic-ui-react'
import greenhouse from '../../assets/logo/greenhouse.svg'
export default function About(animatedClass) {
    return (
        <Grid columns={2} stackable className={animatedClass.props}>
            <Grid.Row>
                <Grid.Column width={4} textAlign='center'>
                    <Image src={greenhouse} size='small' spaced />
                </Grid.Column>
                <Grid.Column data-about="modal-header-text" width={12}>
                    <Header className='center-text' size='large'>Automatic Indoor Garden</Header>
                    <Header.Content>
                        The Automatic Indoor Garden is a web application that allows you to create and manage your own indoor garden. You can create a garden, add plants to you garden, and track the growth of your plants.
                    </Header.Content>
                </Grid.Column>
            </Grid.Row>
        </Grid >
    )

}