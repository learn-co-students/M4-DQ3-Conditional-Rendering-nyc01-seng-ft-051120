import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    active:'profile'
  }

  handleClick =(e)=>{
    this.setState({active:e.target.id})
  }
  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    let detailsToDisplay = <div>Hi, I'm a div!</div>
    const active = this.state.active

    if(active == 'profile'){
      detailsToDisplay = <Profile/>
    }else if(active == 'photo'){
      detailsToDisplay = <Photos/>
    }else if(active == 'cocktail'){
      detailsToDisplay = <Cocktails/>
    }else{
      detailsToDisplay = <Pokemon/>
    }
    
    return (
      <div>
        <MenuBar handleClick={this.handleClick} active={active}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
