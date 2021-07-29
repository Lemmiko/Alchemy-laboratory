import React from 'react'
import Component from './Component';
import styled from 'styled-components'
class Cells extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value)  {
    this.props.deleteCurrent(value);
  }

  render () {
  const components = this.props.state
    return (
      <Wrapper>
          {components.map((component) => 
          <Component 
          key={component.key} 
          id={component.key} 
          title={component.title}
          onClick={() => this.handleClick(component.key)}/>
           )}
      </Wrapper>
    );}
  }

  const Wrapper = styled.div `
  margin: 20px auto;
  width: 300px;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center ;
  `

  export default Cells;
  