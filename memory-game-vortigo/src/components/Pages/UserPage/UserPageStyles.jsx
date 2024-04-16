import styled from "styled-components";

export const UserPageMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-image: url("../../../../public/assets/images/backgroundimage.jpg");
`;

export const PageForm = styled.form`
  font-family: "Lato", sans-serif;
  border-radius: 1rem;
  gap: 6px;
  display: flex;
  background-color: #ffffffcd;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  height: 400px;
  width: 300px;
  flex-direction: column;
  padding: 35px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.829);

  input {
    padding: 5px;
    font-size: 16px;
    border-width: 0px;
    border-color: #ffffff;
    background-color: #f3f3f3;
    color: #000000;
    border-style: solid;
    border-radius: 0px;
    box-shadow: 4px 4px 8px rgba(66, 66, 66, 0.37);
    text-shadow: -6px -1px 5px rgba(212, 212, 212, 0.66);

    &:focus {
      outline: none;
    }
  }

  img {
    height: 200px;
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;
