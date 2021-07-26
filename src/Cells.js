import React from 'react'
import Component from './Component';
import styled from 'styled-components'




function Cells(props) {
  const components = props.state

    return (
      <Wrapper>
          {components.map((component) => 
          <Component 
          key={component.id} 
          title={component.title}/>
           )}
      </Wrapper>
    );
  }
  const Wrapper = styled.div `
  margin-top: 100px;
  background: #dfdfdf;
  display: flex;
  justify-content: center;
  `

  export default Cells;
  