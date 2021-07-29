import React from 'react'
import Component from './Component';
import styled from 'styled-components'

class Components extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(value)  {
    this.props.addComponent(value);
  }
  render() {
    const components = this.props.state
    let i = 0;
    return (
        <Wrapper>
          {components.map((component) => 
          
          <Component key={i++} id={i++} title={component} onClick={() => this.handleClick(component)} />
           )}
        </Wrapper>
    );
}}

  const Wrapper = styled.div `
    background: rgba(0,0,0,0.3);
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly ;
    @media screen and (max-width: 600px) {
      width: 450px;
    }

    @media screen and (max-width: 450px) {
      width: 350px;
    }
  `
  export default Components;
  