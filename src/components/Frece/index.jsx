import React from 'react'
import Marca from '../Marcas'
import * as c from './styled'
import Sorvete0 from '../asset/bolasDeSorvete.png'
import Sorvete1 from '../asset/sorevet2.png'
import Sorvete2 from '../asset/sorevet3.png'
import Sorvete3 from '../asset/sorevet4.png'
import Sorvete4 from '../asset/sorevet5.png'
import GifSorvetinho from '../asset/gifsovetinho.gif'

const Frece = () => {
    const frece = document.querySelector('.tudo')
    var time = 0

    function corrosel() {
        var i;
        var x = document.getElementsByClassName('allImg')
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none'
        }
      
        time++
        if (time > x.length) {
            time = 1
        }
        x[time - 1].style.display = 'block'
   
        setTimeout(corrosel, 2000)
    }

    return (
        <c.Container id='tudo'>
            <c.ContainerImg onAnimationStart={corrosel}>
                <img src={Sorvete0} alt="Bolas de  sorvete" className='allImg' />
                <img src={Sorvete1} alt="" className='allImg' width={250} />
                <img src={Sorvete2} alt="" className='allImg' width={350} />
                <img src={Sorvete3} alt="" className='allImg' width={500} />
                <img src={Sorvete4} alt="" className='allImg' width={650} />
            </c.ContainerImg>
            <c.Main>
                <h1>Melhores <img src={GifSorvetinho} alt='gifdosorvetinho' className='gif' width={50}></img> </h1>
                <h1 className='twuh1'>do Brasil</h1>
                <h3 className='textH3_1'>"Eu quero sombra. </h3>
                <p>água fresca e um</p>
                <h3 className='textH3_2'>Sorvete na Mão" </h3>
                <button >Entrar</button>
            </c.Main>
        </c.Container>
    )
}

export default Frece;

