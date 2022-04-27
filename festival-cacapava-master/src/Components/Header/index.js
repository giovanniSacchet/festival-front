import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import SocialMedia from '../SocialMedia'
 
import './styles.css'

import leftFlag from '../../images/leftFlag.png'
import rightFlag from '../../images/rightFlag.png'
import Sponsors from '../../images/links_abaixo.png'

const Header = () => {
    return (
        <Container 
            fluid
            className="container-header"
        >
            <br />
            <Row className="align-items-center socialMedia">
                <Col xs={2} className="pr-0 pl-0">
                    <Image 
                        src={ leftFlag } 
                        className="imgFlag"
                    />
                </Col>

                <Col xs={8}>
                    <SocialMedia props={1}/>
                </Col>
                
                <Col xs={2} className="pr-0 pl-0">
                    <Image 
                        src={ rightFlag } 
                        className="imgFlag"
                    />
                </Col>
            </Row>

            <Row>
                <Col 
                    xs={12}
                    className = "text-center sponsors"
                    md = {{ span: 8, offset: 3 }}
                >
                    <Image 
                        className="img-sponsors"
                        src = { Sponsors }
                    />    
                </Col>
            </Row>
        </Container>
    )
}

export default Header