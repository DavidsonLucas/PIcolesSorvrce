import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background: transparent;
    backdrop-filter: blur(20px);
    height: 200px;
    box-shadow: 0 0 20px rgba(0, 0 ,0,  .20);
    border-top: 1px solid #00E4F4;

    @media (max-width: 850px){
        .sumiu{
            display: none;
        }
    }

    .centro{
        display: flex;
        flex-direction: column;
        align-items: center     ;

        h5{
            font-size: 15px;
        }
    }

    ol{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap:20px;        

        
        a{
            color: black;
            &:hover{
                text-decoration:none;
            }
        }
    }
`