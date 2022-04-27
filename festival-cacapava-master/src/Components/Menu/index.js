import React from 'react'

import { Container, Image, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './styles.css'

import HomeIcon from '../../images/icone_inicio.png'
import TrophyIcon from '../../images/icone_trofeu.png'
import RegulationIcon from '../../images/icone_regulamento.png'
import RegistrationsIcon from '../../images/icone_inscricoes.png'
import SponsorsIcon from '../../images/icone_patrocinadores.png'
import AwardIcon from '../../images/icone_premiacao.png'
import VotingIcon from '../../images/icone_votacao.png'
import ContactIcon from '../../images/icone_fale.png'

const Menu = () => {
    return (
        <Container 
            fluid
            className="container-menu"
        >
            <Navbar 
                expand="lg" 
            >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="container-row">
                        <Nav.Link 
                            as={ NavLink }
                            to="/home"
                            className="navbar-link"    
                        >
                            <Image
                                src={ HomeIcon }
                                className="menuIcons"
                            />

                            <p>Inicio</p>
                        </Nav.Link>

                        <span className="divisor align-self-middle">|</span>

                        <Nav.Link 
                            as={ NavLink }
                            to="/trofeu"
                            className="navbar-link"    
                        >
                            <Image
                                src={ TrophyIcon }
                                className="menuIcons"
                            />

                            <p>Troféu</p>
                        </Nav.Link>

                        <span className="divisor align-self-middle">|</span>
                        
                        <Nav.Link
                            as={ NavLink }
                            to="/regulamento" 
                            className="navbar-link"    
                        >
                            <Image
                                src={ RegulationIcon }
                                className="menuIcons"
                            />

                            <p>Regulamento</p>
                        </Nav.Link>

                        <span className="divisor align-self-middle">|</span>

                        <Nav.Link 
                            as={ NavLink }
                            to="/inscricoes" 
                            className="navbar-link"
                        >
                            <Image
                                src={ RegistrationsIcon }
                                className="menuIcons"
                            />

                            <p>Inscrições</p>
                        </Nav.Link>

                        <span className="divisor align-self-middle">|</span>

                        <Nav.Link
                            as={ NavLink }
                            to="/patrocinadores"  
                            className="navbar-link"
                        >
                            <Image
                                src={ SponsorsIcon }
                                className="menuIcons"
                            />

                            <p>Patrocinadores</p>
                        </Nav.Link>

                        <span className="divisor align-self-middle">|</span>

                        <Nav.Link
                            as={ NavLink }
                            to="/premiacao" 
                            className="navbar-link"
                        >
                            <Image
                                src={ AwardIcon }
                                className="menuIcons"
                            />

                            <p>Premiação</p>
                        </Nav.Link>

                        <span className="divisor align-self-middle">|</span>

                        <Nav.Link 
                            as={ NavLink }
                            to="/votacao"
                            className="navbar-link"
                        >
                            <Image
                                src={ VotingIcon }
                                className="menuIcons"
                            />

                            <p>Votação</p>
                        </Nav.Link>

                        <span className="divisor align-self-middle">|</span>

                        <Nav.Link
                            as={ NavLink }
                            to="/contato" 
                            className="navbar-link"
                        >
                            <Image
                                src={ ContactIcon }
                                className="menuIcons"
                            />

                            <p>Contato</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                

            </Navbar>
            {/* <Row
                className="container-row align-items-center"
            >
                <Col>
                    <Link to="/home">
                        <Image
                            src={ HomeIcon }
                            widht={ 60 }
                            height={ 60 }
                        />
                    </Link>
                </Col>
                
                <Col>
                    <Link to="/trofeu">
                        <Image
                            src={ TrophyIcon }
                            widht={ 62 }
                            height={ 62 }
                        />
                    </Link>
                </Col>

                <Col>
                    <Link to="/regulamento">
                        <Image
                            src={ RegulationIcon }
                            widht={ 58 }
                            height={ 58 }
                        />
                    </Link>
                </Col>

                <Col>
                    <Link to="/inscricoes">
                        <Image
                            src={ RegistrationsIcon }
                            widht={ 59 }
                            height={ 59 }
                        />
                    </Link>
                
                </Col>

                <Col>
                    <Link to="/patrocinadores">
                        <Image
                            src={ SponsorsIcon }
                            widht={ 55 }
                            height={ 55 }
                            className="SponsorsIcon"
                        />
                    </Link>
                </Col>

                <Col>
                    <Link to="/premiacao">
                        <Image
                            src={ AwardIcon }
                            widht={ 60 }
                            height={ 60 }
                            className="AwardIcon"
                        />
                    </Link>       
                </Col>

                <Col>
                    <Link to="/votacao">
                        <Image
                            src={ VotingIcon }
                            widht={ 68 }
                            height={ 68 }
                            className="VotingIcon"
                        />
                    </Link>
                </Col>

                <Col>
                    <Link to="/contato">
                        <Image
                            src={ ContactIcon }
                            widht={ 62 }
                            height={ 62 }
                        />
                    </Link>
                </Col>
            </Row> */}
        </Container>
    )
}

export default Menu