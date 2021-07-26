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
    margin: 20px 15px;
    border: 1px #0a0a0a solid;
    cursor: pointer;
    filter: opacity(80%) ;
    
    &:hover{
      background: rgba(219, 191, 154, 1);
    }
  `
  const WrapperText = styled.h3`
  font-size: 20px;
 `  
  export default Component;
  