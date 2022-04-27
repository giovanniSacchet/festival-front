import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import './styles.css'
import leftFlag from "../../images/leftFlag.png";
import rightFlag from "../../images/rightFlag.png";
import armador from "../../images/temporaria-amador.png";
import profissional from "../../images/temporaria-profissional.png";



const SessaoVotacao = () => {
    return (
        <Container fluid>
            <Row className="align-items-center rowVideos">
                <Col xs={4} className="pr-0 pl-0 first-flag">
                    <Image
                        src={ leftFlag }
                        className="imgFlag"
                    />
                </Col>

                <Col xs={4} className="text-center p-1">
                    <h1 className="title">Seção de votação popular</h1>
                </Col>

                <Col xs={4} className="pr-0 pl-0 second-flag">
                    <Image
                        src={ rightFlag }
                        className="imgFlag"
                    />
                </Col>
            </Row>

            <Row className="modality">
                <Col className="first-col">
                    <h2 className="text-center pb-1 subtitle">Modalidade Armador</h2>
                    <Image
                        src={ armador }
                        className="imgFlag imgModality"
                    />
                </Col>
                <Col className="second-col">
                    <h2 className="text-center pb-1 subtitle">Modalidade Profissional</h2>
                    <Image
                        src={ profissional }
                        className="imgFlag imgModality"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default SessaoVotacao