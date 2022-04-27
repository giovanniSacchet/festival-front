import React from 'react'

import {  Switch, Route } from 'react-router-dom'

import Home from "./Pages/Home"
import Regulamento from "./Pages/Regulamento"
import Insrcricoes from "./Pages/Inscricoes"
import EmConstrucao from "./Pages/EmConstrucao"

const Routes = () => (

    <Switch>
        <Route path="/home" component={ Home } />
        
        <Route path="/regulamento" component={ Regulamento } />
        
        <Route path="/trofeu" component={ EmConstrucao } />
        
        <Route path="/inscricoes" component={ Insrcricoes } />
        
        <Route path="/patrocinadores" component={ EmConstrucao } />
        
        <Route path="/premiacao" component={ EmConstrucao } />
        
        <Route path="/votacao" component={ EmConstrucao } />
        
        <Route path="/contato" component={ EmConstrucao } />
        
        <Route exact path="/" component={ Home } />
    </Switch>

)

export default Routes