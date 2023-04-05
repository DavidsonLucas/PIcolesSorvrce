import React from 'react'
import * as c from './styled'
import Logo1 from './asset/logo2.jpg'
import Logo2 from './asset/logo1.png'
import Logo3 from './asset/logo4.png'
import Logo4 from './asset/logo6.png'
import Logo5 from './asset/logo7.png'
import Logo6 from './asset/logo8.png'
import Logo7 from './asset/logo9.png'

const Marca = () => {

    return (
        <c.Container id='tudoMarcas'>
            <c.Main>
                <h1>Marcas</h1>
                <h2>  <samp><c.Priority /></samp> AVISO  EMPORTANTE DA EMPRESA<span>(CranbreCold)</span></h2>
                <p>Nesta dia especial passo aqui <br /> para falar  que os melhores fornecedores etao conosco  <br />
                todas as marcas ,requerida no mercado de trabalho, compre Agora Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Officia dolorem sint repudiandae nam officiis tenetur ex veritatis voluptatum explicabo illum optio 
                amet delectus quidem, nisi quasi numquam inventore tempora. Molestiae!.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi eum, porro pariatur harum nesciunt assumenda!
                 Saepe iste laudantium ut temporibus vel voluptatum pariatur nostrum molestiae, soluta sit perferendis culpa.
                </p>
                <h3>OBRIGADO PELA ATENÇAO</h3>
            </c.Main>
            <c.MainImg2 >
                <img src={Logo1} alt="marcas" width={150} className="allImg2 back" />
                <img src={Logo2} alt="marcas" width={150} className="allImg2" />
                <img src={Logo3} alt="marcas" width={150} className="allImg2" />
                <img src={Logo4} alt="marcas" width={150} className="allImg2" />
                <img src={Logo5} alt="marcas" width={150} className="allImg2" />
                <img src={Logo6} alt="marcas" width={150} className="allImg2" />
                <img src={Logo7} alt="marcas" width={150} className="allImg2" />
            </c.MainImg2>
        </c.Container>
    )
}

export default Marca
