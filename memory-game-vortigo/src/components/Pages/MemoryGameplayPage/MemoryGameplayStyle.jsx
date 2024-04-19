import styled from "styled-components";

export const CardsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 1rem;
    min-height: 100vh;
`

export const MemoryGameplayStyle = styled.div`
    text-align: center;
    background-size: cover;
    background-image: url("../../../../public/assets/images/backgroundimage.jpg");
    display: flex;    
    flex-direction: column;

    h1{
        font-size: 35px;
        margin: 6px;
        font-family: "Lato", sans-serif;
        color: #fffdfd;
    }

    h2{
        font-size: 30px;
        margin: 5px 0px 20px 0;
        font-family: "Lato", sans-serif;
        color: white;
    }
`