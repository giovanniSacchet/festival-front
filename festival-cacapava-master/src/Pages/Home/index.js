import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import SessaoVotacao from '../../Components/SessaoVotacao'
import Videos from '../../Components/Videos'

import './styles.css'

import Banner from '../../images/banner.png'

const Home = () => {
    return (
        <Container
            fluid
            className="container-banner"
        >
            <Image 
                src={ Banner }            
                fluid
            />
            <Videos />
            <SessaoVotacao />
        </Container>
    )
}

export default Home