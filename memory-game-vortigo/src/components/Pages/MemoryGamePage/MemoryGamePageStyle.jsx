import styled from "styled-components";

export const MemoryMain = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gray;
  background-image: url("../../../../public/assets/images/backgroundimage.jpg");
  background-size: cover;
`;

export const LineBreak = styled.div`
  width: 100%;
  border-bottom: 2px solid black; 
  margin-top: 5px; 
`;

export const CustomSelect = styled.select`
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  width: 40%;
  font-size: 18px;
  padding: 5px 10px 5px 10px;
  background-color: #FFFFFF;
  border: 2px double #E3EB00;
  border-radius: 5px;
  color: #000000;
  cursor: pointer;
  outline: none;
  box-shadow: 3px 3px 2px 0px #E2E2E2;

  &:focus {
    background: #F2F2F2;
    border: 2px dashed #F7FF0E;
    border-radius: 5px;
  }

  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    width: 10px;
    height: 10px;
    background-color: #000000;
    clip-path: polygon(29% 0%, 71% 0%, 71% 56%, 100% 56%, 50% 100%, 0% 56%, 29% 56%);
  }
`;

export const MemoryContainer = styled.div`
  display: flex;
  font-family: "Lato", sans-serif;
  border-radius: 1rem;
  gap: 6px;
  display: flex;
  background-color: #ffffffcd;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 400px;
  width: 350px;
  flex-direction: column;
  padding: 80px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.829);

  img{
    height: 170px;
    margin: 0;
    padding: 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;

    h1, h2, h3 {
        margin: 6px;
    }
  }
`;
