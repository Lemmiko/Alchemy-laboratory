import React from 'react'
import styled from 'styled-components'
import img from './img/peper.jpg'

function Component(props) {  
    return (
      <Wrapper onClick={props.onClick}>
      <WrapperText key={props.id} value={props.title}  >{props.title}
        </WrapperText>
        </Wrapper>
    );
  }
  
  const Wrapper = styled.div `
    height: 100px;
    width: 100px;
    background: url(${img});
    border-radius: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 10px 10px;
    border: 1px #0a0a0a solid;
    cursor: pointer;
    filter: opacity(80%) ;
    @media screen and (max-width: 600px) {
      width: 80px;
      height: 80px;
      border-radius: 10px;
    }
    @media screen and (max-width: 450px) {
      width: 60px;
      height: 60px;
    }
    &:hover{
      background: rgba(219, 191, 154, 1);
    }
  `
  const WrapperText = styled.h3`
  font-size: 20px;
  @media screen and (max-width: 600px) {
    font-size: 10px;
    
    }
 `  
  export default Component;
  