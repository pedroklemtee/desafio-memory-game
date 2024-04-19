import styled from "styled-components";

const ButtonStyled = styled.button`
    margin: 3px;
    padding: 11px 22px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #000000;
    border-radius: 10px;
    display: block;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #f09819;
    background-image: linear-gradient(45deg, #ffdd00 0%, #fff834  51%, #ffbc06  100%);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;


  @media(max-width: 768px){
    padding: 9px 13px;
  }

    &:hover {
        background-position: right center;
        color: #1b1a1a;
        text-decoration: none;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const Button = ({children, ...props}) => {
    return (
        <ButtonStyled {...props}>{children}</ButtonStyled>
    );
};
