import React from 'react'
import Component from './Component';
import styled from 'styled-components'



class Components extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(value)  {
    this.props.action(value);
  }
  render() {
    const components = this.props.state
    let i = 0;
  
    return (
        <Wrapper>
          {components.map((component) => 
          
          <Component key={i++} title={component} onClick={() => this.handleClick(component)} />
           )}
        </Wrapper>
    );
}
}

  const Wrapper = styled.div `
    background: #dfdfdf;
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  export default Components;
  