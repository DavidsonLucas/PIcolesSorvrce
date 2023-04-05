import styled from "styled-components";
import {CiWarning} from 'react-icons/ci'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 12em;
    width: 98.7.1vw;
    height: 120vh;
    background: black;
    color:red;
    display: none;
    margin-bottom: -17px;
`

export const Main = styled.div`
    width: 650px;
    height: 500px;
    background: white;
    backdrop-filter: blur(20px);
    border-radius: 30px;
    box-shadow: 0  0 30px rgba(0, 0, 0, .5);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 10px;
   border-left:4px solid #00E423;
   border-top:4px solid red;

    p{
        width: 400px;
        text-align: center;
    }
    h2{
        display: flex;
        align-items: center;
        font-size: 20px;
        gap: 20px;

        span{
            color: black;
        }
    }
`

export const Priority = styled(CiWarning)`
    font-size:60px;
    
`
export const MainImg2 = styled.div`
    width: 88%;
    height: 200px;
    background: transparent;
    border-left:4px solid #00E423;
   border-top:4px solid red;
   border-radius: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 50px;
   backdrop-filter: blur(20px);
    
   .back{
    background: red;
   }

`
