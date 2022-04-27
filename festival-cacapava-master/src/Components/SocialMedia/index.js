import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

import './styles.css'

import fbIcon from '../../images/fb.png'
import instagramIcon from '../../images/instagram.png'
import festival from '../../images/logo.png'

const SocialMedia = (props) => {
    return (
        <Container>
            <Row>

                {
                    props.props === 1 ?
                        <Col xs={5} className="px-0">
                            <Image
                                fluid
                                src={festival}
                                className="align-self-center img-header"
                            />
                        </Col>
                        :
                        <Col>
                            <Image
                                fluid
                                src={festival}
                                className="align-self-center img-footer"
                            />
                        </Col>
                }

                <Col xs={7} className="information">
                    <Row className="text-center inline-block iconTitle">
                        <Col>
                            <a className="black-link" target="_blank" href="https://www.facebook.com/Festival-da-Can%C3%A7%C3%A3o-Nativista-de-Ca%C3%A7apava-Do-Sul-105055724852000">
                                <Image
                                    className="icon"
                                    fluid
                                    src={fbIcon}
                                />&nbsp;
                                <h7>/ I Festival de Canção Nativista de Caçapava do Sul</h7>
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a className="black-link" target="_blank" href="https://www.instagram.com/festivalcancaonativista/?fbclid=IwAR3rMcCpiK_zyjYYUdElvffi11XtI9YMUnJKtb-GWWaZxSMdFomUNJtwjMc">
                                <Image
                                    className="icon"
                                    fluid
                                    src={instagramIcon}
                                />&nbsp;
                                <h7>@festivalnativistars</h7>
                            </a>
                        </Col>
                    </Row>

                    <Row className="pl-2">
                        <Col className="headerTitle text-center p-0">
                            <h4>TROFÉU LUIS EUGÊNIO DIAS DOS SANTOS</h4>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
)

}

export default SocialMedia