import Components from './Components';
import Cells from './Cells';
import styled from 'styled-components'
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addComponent, deleteCurrent, createPotion} from './store/ActionCreators/action'
import Button from './Button'

class App extends React.Component {
   render () {
    return <Wrapper>
              <Components state={this.props.components}
                          addComponent={this.props.addComponent}/>
              <Cells state={this.props.currentComponents}
                     deleteCurrent={this.props.deleteCurrent}/>
               <Button createPotion={this.props.createPotion}/>
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
      addComponent: bindActionCreators(addComponent, dispatch),
      deleteCurrent: bindActionCreators(deleteCurrent, dispatch),
      createPotion: bindActionCreators(createPotion, dispatch)
   }
 }   

    const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App)



 const Wrapper = styled.div `
  width: 600px;
  background: rgba(0,0,0,0.5);
  height: 100vh;
  margin: 0 auto;
 `

export default WrappedApp;
