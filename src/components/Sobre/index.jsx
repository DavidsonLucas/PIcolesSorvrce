import React from 'react'
import * as c from './styled'
import Casquinha from './asset/casquinha-sorvete.png'
import Milkshake from './asset/Milkshake.png'
import Sorvet from './asset/sorvete.png'
import Sacole from './asset/sacole.png'
import Palito from './asset/picole-de-palito.png'


const Sobre = () => {
    return (
        <c.Red id='tudoSobre'>
            <c.ContainerH1>
                <h1>Sobre a empresa <br /> CranbreCold  </h1>
            </c.ContainerH1>
            <c.Container>
                <c.Vendas className='sobreVendas'>
                  
                    <label htmlFor="sacole">
                        <img src={Sacole} alt="picoles" id='sacole' />
                        <samp> Sacole</samp>
                    </label>
                    <label htmlFor="sacole">
                        <img src={Casquinha} alt="picoles" id='sacole' />
                        <samp> Casquinhas</samp>
                    </label>
                    <label htmlFor="sacole">
                        <img src={Milkshake} alt="picoles" id='sacole' />
                        <samp>Milkcheik</samp>
                    </label>
                    <label htmlFor="sacole">
                        <img src={Sorvet} alt="picoles" id='sacole' />
                        <samp> Sorvetes</samp>
                    </label>
                    <label htmlFor="sacole">
                        <img src={Palito} alt="picoles" id='sacole' />
                        <samp> Palito</samp>
                    </label>
                </c.Vendas>
                <c.Seta></c.Seta>
                <c.Explication className='sobreExpliction'>
                    <h1>Sobre</h1>
                    <p>
                        vendemos produtos como Milk shake, Sorvete, picoles de palito, sacoles, casquinhas.
                        Cada caixa desses produtos vem com 50 unidades.
                        sem contar nos saquinhos, copos e utensílio para cada coisa qual nosso cliente comprar
                    </p>
                    <h2>Poromoçoes</h2>
                    <h6>A cada 100 caixas compradas enviamos uma de brinde</h6>
                </c.Explication>
            </c.Container>
        </c.Red>
    )
}

export default Sobre
