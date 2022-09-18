import React from 'react'
import { Image, Container } from 'semantic-ui-react'
import Logo from '../../assets/logo/AIGlogo.png'
import greenhouse from '../../assets/logo/greenhouse.svg'
export default function About(animatedClass) {
    return (
        <Container>
            <Image src={greenhouse} className={animatedClass.props} fluid />
        </Container>
    )
}