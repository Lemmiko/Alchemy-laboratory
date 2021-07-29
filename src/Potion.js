import React from 'react'
import styled from 'styled-components'

function Potion(props) {  
    return (
      <>
      <Img key={props.id} title={props.name} src={Object.values(props.img)[0]}/>
        </>
    );
  }

  const Img = styled.img`
    height: 80px;
    width: 80px;
    margin-right: -35px;
    padding-top: 15px;
    padding-left: 5px;
    @media screen and (max-width: 450px) {
      height: 50px;
      width: 50px;
    }`  
  export default Potion;
  