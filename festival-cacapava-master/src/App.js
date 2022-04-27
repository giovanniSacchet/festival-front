import React from 'react'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Header from './Components/Header' 
import Menu from './Components/Menu'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
