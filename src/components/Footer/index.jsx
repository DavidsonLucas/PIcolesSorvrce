import React from 'react'
import * as c from './styled'
import GifSorvetinho from '../asset/gifsovetinho.gif'


const Footer = () => {
    return (
        <div>
            <c.Container id='tudoFooter'>
                <div className='centro'>
                    <h5 class="final "> Dúvidas? Ligue 0800 591 8942</h5>
                    <img src={GifSorvetinho} alt="sorvete pulando"  width={70}/>
                </div>
                <div className='sumiu'>
                    <ol >
                        <li><a href="#">Perguntas frequentes</a></li>
                        <li><a href="#">Relações com investidores</a></li>
                        <li><a href="#">Formas de assistir</a></li>
                        <li><a href="#">Informações corporativas</a></li>
                    </ol>
                </div>

                <div className='sumiu'>
                    <ol>
                        <li><a href="#">Centro de ajuda</a></li>
                        <li><a href="#">Carreiras</a></li>
                        <li><a href="#">Termos de uso</a></li>
                        <li><a href="#">Entre em contato</a></li>
                    </ol>

                </div>
                <div className='sumiu'>
                    <ol>
                        <li><a href="#">Conta</a></li>
                        <li><a href="#">Resgatar cartão pré-pago</a></li>
                        <li><a href="#">Privacidade</a></li>
                        <li><a href="#">Teste de velocidade</a></li>
                    </ol>
                </div>
                <div >
                    <ol >
                        <li><a href="#">Media Center</a></li>
                        <li><a href="#">Comprar cartão pré-pago</a></li>
                        <li><a href="#">Preferências de cookies</a></li>
                        <li><a href="#">Avisos legais</a></li>
                    </ol>
                </div>


            </c.Container>
        </div>
    )
}

export default Footer
