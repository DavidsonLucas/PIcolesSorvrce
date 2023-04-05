import styled from "styled-components";

export const Red = styled.div`
    display: flex;
    flex-direction: column;
    display: none;
    margin-bottom: 100px;

    @media (max-width: 850px){
        display: flex;
        flex-direction: column;
    }
`

export const ContainerH1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;

    h1{
        font-size: 100px;
        text-align: center;
        font-family: "Amatic SC", cursive;
        background: linear-gradient(60deg,#006634 30%,#6D402E 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    
    }
    @media (max-width: 850px){
        font-size: 50px;
        margin-top: 10rem;

    }

`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:50px;

   
    
    .sobreVendas{
        width: 400px;
        height: 570px;
        background: transparent;
        backdrop-filter: blur(20px);
        clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center ;
        gap: 30px;
        border: 3px solid #00E4F4;


    }

    .sobreExpliction{
        width: 520px;
        height: 500px;
        background: transparent;
        backdrop-filter: blur(20px);
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid #00E4F4;
        border-radius: 30px;
    }

    @media (max-width: 850px){
        flex-direction: column;

        .sobreVendas{
        width: 360px;
        height: 570px;
        background: #25936a;
    }
    .sobreExpliction{
        width: 375px;
        height: 500px;
        clip-path:none;

    }
    }
`

export const Vendas = styled.div`
h1{
    font-family: 'Press Start 2P', cursive;
    background: linear-gradient(60deg,#00E4F4 30%,#F13D46 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}
  
samp{
    width: 120px;
    color: white;
    font-size: 1.7rem;
    text-align: center;
    position: relative;
    font-family: 'VT323', monospace;
    background: linear-gradient(60deg,#F7077B 30%,#F6C301 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
       border :1px solid  #00E4F4 ;
       


    &::after{
            content: "";
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 100%;
            height: 3px;
            background:linear-gradient(60deg,#00E4F4 30%,#F13D46 70%);
            border-radius: 5px;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform .5s;
        }
         &:hover::after{
            transform-origin:left;
            transform: scaleX(1);
        }
         
}
label{
    display: flex;
    align-items: center;
    gap: 40px;
}
img{
     width: 80px;
        
    &:hover{
     transform: scale(1.3);
     }
}
`

export const Explication = styled.div`
    h1{
        font-family: 'Press Start 2P', cursive;
    background: linear-gradient(60deg,#00E4F4 30%,#F13D46 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 50px;
    }
    h2{
        font-family: 'Press Start 2P', cursive;
    background: linear-gradient(60deg,#00E4F4 30%,#F13D46 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        line-height: 50px;

    }
    p{
        width: 300px;
        font-size: 18px;
        margin-bottom: 30px;
        font-family: "Yeseva One", cursive;
        color:#006634; 

    }
    h6{
        font-size: 20px;
        width: 200px;
        font-weight: 100;
        font-family: "Yeseva One", cursive;
        background: linear-gradient(60deg,#006634 30%,#6D402E 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media (max-width: 850px){
        h1{
            font-size: 20px;
        }
        p{
            font-size: 15px;
        }
        h2{
            font-size: 20px;
        }
        h6{
            font-size: 15px;
        }
    }


`

export const Seta = styled.div`
    width: 200px;
    height: 100px;
    background: linear-gradient(60deg,#00E4F4 30%,#F13D46 70%);
    clip-path:  polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);

    @media (max-width: 850px){
        clip-path: polygon(69% 0, 69% 59%, 99% 60%, 50% 99%, 2% 61%, 30% 60%, 30% 0);
        height: 200px;
    }
    
`