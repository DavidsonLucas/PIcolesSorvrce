import styled from "styled-components";
export const nav = styled.nav``

export const Container = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5px 12em;
   box-shadow: 0 0 0 4px rgba(255, 126, 174, .50);
   background:linear-gradient(60deg,#F3E8D4 30%,#FF7EAE 70%);
`
export const Ul = styled.ul`
    list-style: none;
    display: flex;
    gap: 12em;

    @media (max-width: 850px){
      display: none;
    }
    
    li{
        display: flex;
        font-family: 'VT323', monospace;
        
        a{
         position: relative;
         text-decoration: none;
         font-size: 1.7rem;

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


    }
`
