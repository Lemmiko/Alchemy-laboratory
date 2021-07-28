import React from 'react'
import styled from 'styled-components'


function Potion(props) {  
    return (
      <Wrapper >
      <Img key={props.id} title={props.name} src={Object.values(props.img)[0]}/>
        </Wrapper>
    );
  }
  

   
  const Wrapper = styled.div `
    height: 30px;
    width: 50px;
    border-radius: 10px;
    /* background: rgba(219, 191, 154, 0.2); */
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;

  `
  const Img = styled.img`
    height: 90px;
    width: 90px;
 `  
  export default Potion;
  