import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import SocialMedia from '../SocialMedia'

import './styles.css'

import Sponsors from '../../images/links_abaixo.png'

const Footer = () => {
    return (
        <Container
            fluid
        >
            <Row className = "row-footer">
                <Col 
                    xs={12}
                    className = "text-center"
                >
                    <Image
                        src = { Sponsors }
                        fluid
                    />    
                </Col>
            </Row>
            <Row
                className = "secondRow"
            >
                <Col 
                    xs={12}
                >
                    <br />
                     <SocialMedia se={2}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer