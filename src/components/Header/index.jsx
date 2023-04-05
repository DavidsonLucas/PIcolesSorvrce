import React from 'react'
import * as c from './styled'
import Logo from '../asset/sorvete.png'
import Frece from '../Frece'
import Sabores from '../Sabores'
import Marca from '../Marcas'
import Sobre from '../Sobre'
import Footer from '../Footer'

const Header = () => {
  const sobre = ()=> {
    const froce = document.getElementById('tudo').style.display = 'none'
    const froce2 = document.getElementById('tudoSabor').style.display = 'none'
    const force3 = document.getElementById('tudoMarcas').style.display = 'none'
    const force4 = document.getElementById('tudoSobre').style.display = 'flex'
    const force5 = document.getElementById('tudoFooter').style.display = 'flex'


  }

  const marcas = ()=> {
    const froce = document.getElementById('tudo').style.display = 'none'
    const froce2 = document.getElementById('tudoSabor').style.display = 'none'
    const force3 = document.getElementById('tudoMarcas').style.display = 'flex'
    const force4 = document.getElementById('tudoSobre').style.display = 'none'
    const force5 = document.getElementById('tudoFooter').style.display = 'flex'
  }
  const sbores = () => {
    const froce = document.getElementById('tudo').style.display = 'none'
    const froce2 = document.getElementById('tudoSabor').style.display = 'flex'
    const force3 = document.getElementById('tudoMarcas').style.display = 'none'
    const force4 = document.getElementById('tudoSobre').style.display = 'none'
    const force5 = document.getElementById('tudoFooter').style.display = 'none'
  }
  const homer = () => {
    const froce = document.getElementById('tudo').style.display = 'flex'
    const froce2 = document.getElementById('tudoSabor').style.display = 'none'
    const force3 = document.getElementById('tudoMarcas').style.display = 'none'
    const force4 = document.getElementById('tudoSobre').style.display = 'none'
    const force5 = document.getElementById('tudoFooter').style.display = 'flex'

  }

  return (
    <c.nav>
      <c.Container>
        <img src={Logo} alt="logo" width={50} />
        <c.Ul>
          <li><a href="#" onClick={homer} >Home</a></li>
          <li><a href="#" onClick={sbores}>Sabores</a></li>
          <li><a href="#" onClick={sobre} >Sobre</a></li>
          <li><a href="#" onClick={marcas}>Marcas</a></li>

        </c.Ul>
      </c.Container>
    </c.nav>
  )
}

export default Header
