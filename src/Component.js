import React from 'react'
import styled from 'styled-components'


function Component(props) {  

    return (
      <Wrapper>
      <WrapperText key={props.id} value={props.title} onClick={props.onClick} >{props.title}
        </WrapperText>
        </Wrapper>
    );
  }
  

  const Wrapper = styled.div `
    height: 100px;
    width: 100px;
    background: #dfcfdf;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 50px 20px;
    border: 1px #0a0a0a solid;
    
  `
  const WrapperText = styled.h3`
  font-size: 20px;
 `  
  export default Component;
  