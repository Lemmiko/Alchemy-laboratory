import Components from './Components';
import Cells from './Cells';
import styled from 'styled-components'
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import addComponent from './store/ActionCreators/action'

class App extends React.Component {
   render () {
    return <Wrapper>
              <Components state={this.props.components}
                          action={this.props.action}/>
              <Cells state={this.props.currentComponents}/>
           </Wrapper>
  }
  }

 const mapStateToProps = (state) => {
    return {
      components: state.components,
      currentComponents: state.currentComponents
    }
    }
 const mapDispatchToProps = (dispatch) =>  {
   return {
    
    action: bindActionCreators(addComponent, dispatch)
   }
 }   

    const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App)



 const Wrapper = styled.div `
  width: 600px;
  background: #f1f1f1;
  height: 100vh;
  margin: 0 auto;
 `

export default WrappedApp;
