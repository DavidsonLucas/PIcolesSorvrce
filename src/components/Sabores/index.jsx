import React from 'react'
import * as c from './styled'
import CasquinhaAzul from './asset/casquoinha-azul.png'
import CasquinhaMista from './asset/casquinha-mista.png'
import CasquinhaMorngo from './asset/casquinha-morango.png'
import CasquinhaBlack from './asset/casquinha-black.png'
import CasquinhaTrut from './asset/casquinha-trutefruti.png'
import CasquinhaBAlnilha from './asset/casquinha-balnilha.png'

const Sabores = () => {
  const trocarDeCor_Azul = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.sorvete')
    let nome = document.querySelector('.nome')
    circulo.style.background = "#54C1DC"
    imgSrc.src = CasquinhaAzul
    nome.innerText = "Fini beijinho"
  }
  const trocarDeCor_Misto = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.sorvete')
    let nome = document.querySelector('.nome')
    circulo.style.background = "linear-gradient(100deg, #A76F4B 50%, #FFF6D5 50%)"
    imgSrc.src = CasquinhaMista
    imgSrc.width = 300
    imgSrc.height = 531
    nome.innerText = "Misto"

  }
  const trocarDeCor_Morango = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.sorvete')
    let nome = document.querySelector('.nome')
    circulo.style.background = "#D36175"
    imgSrc.src = CasquinhaMorngo
    imgSrc.width = 300
    imgSrc.height = 531
    nome.innerText = "Morango"


  }
  const trocarDeCor_Preto = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.sorvete')
    let nome = document.querySelector('.nome')
    circulo.style.background = "#24292F"
    imgSrc.src = CasquinhaBlack
    imgSrc.width = 300
    imgSrc.height = 531
    nome.innerText = "Black"

  }
  const trocarDeCor_TrutFrut = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.sorvete')
    let nome = document.querySelector('.nome')
    circulo.style.background = "#A97BB4"
    imgSrc.src = CasquinhaTrut
    imgSrc.width = 300
    imgSrc.height = 531
    nome.innerText = "Trute frut"

  }
  const trocarDeCor_Balnilha = () => {
    let circulo = document.querySelector('.circulo')
    let imgSrc = document.querySelector('.sorvete')
    let nome = document.querySelector('.nome')
    circulo.style.background = "#FFF6D5"
    imgSrc.src = CasquinhaBAlnilha
    nome.innerText = "Balnilha"

  }
  return (
    <c.Container id='tudoSabor'>
      <c.Ipho>
        <h1 className='picole' >Picoles</h1>
        <c.Dentoipho>
          <label htmlFor="nome"> sabor:</label>
          <h1 className='nome'>Fini beijinho</h1>
        </c.Dentoipho>
        <h2 >Tão saboroso. Tão ao seu alcance.</h2>

        <p >
          Gostoso e perfeitos. Agora com Novos sabores.
        </p>

        <button className="botao">Comprar</button>

        <p className="escolha-cor">Escolha sua cor:</p>
        <c.Container_button>
          <button className="azul troca-cor style" onClick={trocarDeCor_Azul}></button>
          <button className="misto troca-cor style" onClick={trocarDeCor_Misto}></button>
          <button className="morango troca-cor style" onClick={trocarDeCor_Morango}></button>
          <button className="preto troca-cor style" onClick={trocarDeCor_Preto} ></button>
          <button className="Truti-frut troca-cor style" onClick={trocarDeCor_TrutFrut}></button>
          <button className="balnilha troca-cor style" onClick={trocarDeCor_Balnilha}></button>
        </c.Container_button>
      </c.Ipho>
      <c.Circulo className='circulo'></c.Circulo>
      <img className='sorvete' src={CasquinhaAzul} alt="" />
    </c.Container>
  )
}

export default Sabores