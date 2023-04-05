import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: none;
    padding: 10px 0;
   
    
    img{
        margin-top:100px;
        z-index:99;
        transition: all .5s ease-in-out .0s;
        /* width: 300px;
        height: 531px; */
    }
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #A09D9D;
        margin-top: -17em;
        padding: 12em 0;

        img {
            width: 200px;
            margin-left: 20px;
        }
    }
   
`

export const Circulo = styled.div`
        width: 100%;
        max-width: 90%;
        height: 100%;
        background-color: #54C1DC;
        position: absolute;
        bottom: 0;
        right: 0;
        clip-path: circle(600px at right 1000px);
        transition: all .5s ease-in-out .0s;
        ;
        @media (max-width: 750px) {
            display: none;
        }
       
`

export const Ipho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 650px;
    height: 500px;
    background: transparent;
    backdrop-filter: blur(20px);
    border-radius: 30px;
    box-shadow: 0  0 30px rgba(0, 0, 0, .5);
    border-left:4px solid #00E4F4;
    border-top:4px solid #00E4F4;
    margin-top: 50px;
    margin-left: 50px;
    padding: 19px 0;

    
    .picole{
        font-size: 60px;
        font-family: 'Press Start 2P', cursive;
        line-height: 2em;
        background: linear-gradient(60deg,#00E4F4 30%,#F13D46 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }
    label{
        font-family: 'Yeseva One', cursive; 
        font-size: 40px;
        color: #006634;


    }
    .nome{
        font-family: 'Yeseva One', cursive; 
        font-size: 40px;
        background: linear-gradient(60deg,#F7077B 30%,#F6C301 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h2{
        font-size: 40px;
        margin: 10px 0 15px 0;
        text-align: center;
        color: #00E4F4;
    }
    p{
        font-size: 20px;
        margin-bottom: 25px;
        background: linear-gradient(60deg,#006634 30%,#6D402E 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
   
    .botao{
    background-color:#0071e3 ;
    border: none;
    color: #ffffff;
    padding: 10px 30px;
    border-radius: 30px;
    margin-bottom: 40px;
    cursor: pointer;
    transition:all .6s ease-in-out .0s ;
    &:hover{
        transform: scale(1.2);
    }
    &:active{
        opacity: .2;
    }
    }
    @media (max-width: 750px){
        width: 325px;
        height: 500px;
        margin-left: 0px;
        .picole{
            font-size: 30px;
            line-height: 80px;
            margin-top:-10px;
        }
        label{
            font-size: 25px;
        }
       .nome{
        font-size: 22px;
        }
        h2{
            font-size: 20px;
            line-height: 30px;
            margin-bottom: 20px;
        }
        p{
            width  : 300px;
            text-align: center;

        }
       .botao{
        margin-bottom: 7px;
       }
    }
    
`

export const Container_button = styled.div`
    display: flex;
    gap: 10px;
    .style{
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease-in-out 0s;
        &:hover{
            transform: scale(1.2);
        }
        &:active{
            opacity: .2;
        }
    }
   
  
    .azul{
        background-color: #0071e5;
    }
    .misto{
    background: linear-gradient(100deg, #A76F4B 50%, #FFF6D5 50%);
    }
    .morango{
        background-color: #F13D46;
    }
    
    .preto{
        background-color: #24292F;
    }
    
    .Truti-frut{
        background-color: #A97BB4;
    }
    
    .balnilha {
        background-color: #FFF6D5;
    }
`
export const Dentoipho = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

`