import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import setaDireita from '../../images/seta_direita.png'
import setaEsquerda from '../../images/seta_esquerda.png'
import v3 from '../../images/v3.png'

import './styles.css'
import video from "../../images/video.png";

const Videos = (props) => {
    return (
            <Container
                fluid
            > 
                <Row className="text-center row-videos">
                    <Col>
                        <h1 className="title-videos"><b>Vídeos</b></h1>
                        <Image
                            fluid
                            src={ video }
                        />
                    </Col>
                </Row>

                <br />

                <Row>
                    <Col
                        className="slider-home-page pl-5 pr-5 align-items-center"
                    >
                        <Container className="container-slider align-items-center">
                            <Image 
                                src={ setaEsquerda }
                                className="seta"
                            />
                            <Image 
                                fluid
                                src={ v3 }
                                className="slider-image"
                            />
                            <Image 
                                fluid
                                src={ v3 }
                                className="slider-image"
                            />
                            <Image 
                                fluid
                                src={ v3 }
                                className="slider-image"
                            />
                            <Image 
                                src={ setaDireita }
                                className="seta"
                            />
                        </Container>
                       
                    </Col>
                </Row>
            </Container>
    )
}

export default Videos