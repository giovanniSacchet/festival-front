import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './styles.css'

const EmConstrucao = () => {
    return (
        <Container 
            fluid
        >
           <Row className="text-center">
                <Col xs={12} className="colConstruction">
                    <br />
                    Em construção, aguarde novas atualizações! 
               </Col>
           </Row>

           <br />
        </Container>
    )

}

export default EmConstrucao