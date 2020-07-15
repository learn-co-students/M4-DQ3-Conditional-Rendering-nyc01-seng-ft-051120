import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'



class MainBox extends React.Component {


  state = {
    option: ""
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div> 
    // Profile, Photos, Cocktails, Pokemon

    return (
      <div>
        <MenuBar selectOption= {(choice)=> this.setState({option: choice })}/>
        {this.state.option==='Profile' && Profile()}
        {this.state.option==='Photo' && Photos()}
        {this.state.option==='Cocktail' && Cocktails()}
        {this.state.option==='Pokemon' && <Pokemon/>} 
      </div>
    )
  }

}

export default MainBox
