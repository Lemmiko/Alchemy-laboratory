import Components from './Components';
import Cells from './Cells';
import styled from 'styled-components'
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addComponent, deleteCurrent, createPotion, changeToggle} from './store/ActionCreators/action'
import Button from './Button'
import PotionsShelf from './PotionsShelf';
import Modal from './Modal'

class App extends React.Component {
   render () {
    return <Wrapper>
              <Components state={this.props.components}
                          addComponent={this.props.addComponent}/>
              <Cells state={this.props.currentComponents}
                     deleteCurrent={this.props.deleteCurrent}/>
               <Button createPotion={this.props.createPotion}/>
               <PotionsShelf potions={this.props.potions}/>
               <Modal modal={this.props.modal}
                      changeToggle={this.props.changeToggle}/>
           </Wrapper>
  }
  }

 const mapStateToProps = (state) => {
    return {
      components: state.components,
      currentComponents: state.currentComponents,
      potions: state.potions,
      modal: state.modal
    }
    }
 const mapDispatchToProps = (dispatch) =>  {
   return {
      addComponent: bindActionCreators(addComponent, dispatch),
      deleteCurrent: bindActionCreators(deleteCurrent, dispatch),
      createPotion: bindActionCreators(createPotion, dispatch),
      changeToggle: bindActionCreators(changeToggle, dispatch)
   }
 }   

    const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App)



 const Wrapper = styled.div `
  width: 600px;
  background: rgba(0,0,0,0.3);
  height: 500px;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 600px) {
      width: 450px;
      margin: 0 auto;
    }
 `

export default WrappedApp;
