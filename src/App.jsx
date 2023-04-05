import React from 'react'
import Footer from './components/Footer'
import Frece from './components/Frece'
import Header from './components/Header'
import Marca from './components/Marcas'
import Sabores from './components/Sabores'
import Sobre from './components/Sobre'
import Global from './styles/GlobalStyled'

const App = () => {
  return (
    <div>
      <Header />
      <Frece />
      <Sabores />
      <Sobre />
      <Marca />
      <Footer />
      <Global />
    </div>
  )
}

export default App
