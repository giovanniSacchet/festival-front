import React from 'react'
import { Container } from 'react-bootstrap'

import fichaInscricao from '../../Files/FICHA-DE-INSCRIÇÃO-FESTIVAL-NATIVISTA.pdf'
import autorizacaoParticipacaoMenor from '../../Files/Autorização Participação de Menor.pdf'
import autorizacaoImagemSom from '../../Files/Autorização de Uso de Imagem e Som - Festival Nativista.pdf'

import './styles.css'

const Inscricoes = () => {
    return (
        <Container
            fluid
        >
                <Container 
                    className="text-center mt-3 container-inscricoes"
                >
                    <br />

                    <h3><b>INSCRIÇÕES ABERTAS</b></h3>

                    <br />
                    
                    <p className="text-justify">Conforme o regulamento, os documentos necessários para a inscrição são: </p>
                    
                    <div 
                        className="tab text-justify"
                    >
                        <br />
                        <p>&#9679; Ficha de Inscrição;</p>
                        <p>&#9679; Cópia da Carteira de Identidade (RG) ou Carteira Nacional de Habilitação (CNH) de
                        todos que apareceram no vídeo;</p>
                        <p>&#9679; Termo de autorização de uso de imagem e voz, e termo de autorização de participação
                        tanto para o compositor, intérprete e músicos menores de 18 anos;</p>
                        <p>&#9679; Cópia digitada da letra da composição, com nome completo do compositor, músicos e
                        intérprete;</p>
                        <p>&#9679; Cópia digitalizada do documento de identidade dos pais ou responsáveis dos menores
                        de 18 anos. </p>
                        <br />
                    </div>

                    <p className="text-justify">Para efetuar devidamente a sua candidatura, faça o download e preencha os seguintes arquivos:</p>

                    <br />
                    <p><a href={ fichaInscricao } download>Ficha de inscrição</a></p>

                    <p><a href={ autorizacaoImagemSom } download>Autorização uso de imagem e voz</a></p>

                    <p><a href={ autorizacaoParticipacaoMenor } download>Autorização de participação de menor</a></p>
                    
                    <br />
                    <p className="text-justify">Após o devido preenchimento, envie os arquivos e seus documentos de acordo com o
                    regulamento para o e-mail: incricoes@festivalcancaonativistars.com.br e aguarde o
                    deferimento da inscrição.</p>

                </Container>
        </Container>
    )
}

export default Inscricoes