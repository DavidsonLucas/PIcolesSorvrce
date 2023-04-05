import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
    margin-bottom: 17em;
   

    @media (max-width: 850px){
        margin-top: -1px;
        flex-direction: column;
        gap: 40px;
        position: relative;
        background-color: #FF7EAE;
        padding: 10em 0;
        

    }
`
export const ContainerImg = styled.div`
        margin-top:40px;
        width: 350px;
        height: 600px;
        background-color: transparent;
        border-right: 4px solid #00E4F4;
        border-bottom: 4px solid #00E4F4;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius:30px ;
        rotate: -15deg;
        backdrop-filter: blur(20px);
        box-shadow: 0  0 30px rgba(0, 0, 0, .5);
        transition: all .8s ease-in-out .0s;
        animation: all  10s ease-in-out infinite;

        @keyframes all {
            0%{
                transform: scale(0);
            }
            50%{
                transform: scale(1);

            }
            75%{
                transform: scale(.9);

            }
            100%{
                transform: scale(0);
            }
        }
        .allImg{
            position: absolute;
            transition: 1.0s ease-in-out;
            
        }
        @media (max-width: 850px){
           width: 175px;
           height: 300px;
           margin: 0;
           position: relative;
           top:30rem;
        background-color: #FF7EAE;


          .allImg{
            width: 250px;
         }
    } 
`

export const Main = styled.div`
    width: 650px;
    height: 500px;
    background: transparent;
    backdrop-filter: blur(20px);
    border-radius: 30px;
    box-shadow: 0  0 30px rgba(0, 0, 0, .5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    border-left:4px solid #00E4F4;
    border-top:4px solid #00E4F4;

        
    h1{
        font-size: 40px;
        font-family: 'Press Start 2P', cursive;
        background: linear-gradient(60deg,#00E4F4 30%,#F13D46 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        line-height: 60px;
        width: 690px;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .textH3_1{
        font-size: 70px;
        font-family: 'Amatic SC', cursive;
        font-weight: bold;
        background: linear-gradient(60deg,#006634 30%,#6D402E 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .textH3_2{
        font-size: 75px;
        font-family: 'Amatic SC', cursive;
        font-weight: bold;
        background: linear-gradient(60deg,#F7077B 30%,#F6C301 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        
    }
    p{
        font-size: 27px;
        font-family: 'Yeseva One', cursive; 
        color:#00B8C5;
        font-weight: bold;

    }

    button{
        width: 140px;
        height: 40px;
        border: none;
        border-radius: 30px;
        background: linear-gradient(60deg,#00E4F4 30%,#F13D46 70%);
        cursor:pointer;
        color: white;
        font-size: 20px;
        font-family: 'Amatic SC', cursive;
        transition: all .5s ease-in-out .0s;

        &:hover{
            background:white;
            color: black;
            transform: scale(1.3);
        }
        &:active{
            opacity: .2;
        }        

    }

    
   @media (max-width: 850px){
    width: 365px;
    height: 400px;
    position: relative;
    bottom: 24rem;
    border: none;
    backdrop-filter:none;

    h1{
        font-size: 30px;
        
    }
    .twuh1{
        margin-top:-40px;
    }

    .textH3_1{
        font-size: 50px;
    }

    .textH3_2{
        font-size: 50px;

    }
    p{
        font-size: 23px;
    }

    .gif{
        width: 30px;
    }
        
    }
    
`