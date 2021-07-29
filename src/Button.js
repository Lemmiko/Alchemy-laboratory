import React from 'react'
import styled from 'styled-components'


function Button (props) {  

    const handleClick = () => {
        props.createPotion();
      } 
    return (
        <Btn onClick={() => handleClick()}>Создать</Btn>
    );
  }
  

  const Btn = styled.div `
    height: 50px;
    width: 90px;
    font-weight: 700;
    border-radius: 10px;
    background: rgba(219, 191, 154, 1);
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin:  40px auto;
    border: 1px #0a0a0a solid;
    cursor: pointer;
    &:active {
        box-shadow: none;
        background: rgba(186, 163, 132, 1);
    }
    @media screen and (max-width: 600px) {
      font-size: 15px;
      height: 40px;
      width: 80px;
    }
    `

 
  export default Button;
  