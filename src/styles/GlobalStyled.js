import { createGlobalStyle } from "styled-components";
import Background from '../asset/gifs-de-sorvete-0.gif'

const Global = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     }

     body{
      width:100%;
      height: 100%;
      background-image:url(${Background});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
     }
`

export default Global