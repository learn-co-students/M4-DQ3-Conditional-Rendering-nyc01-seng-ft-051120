import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
 
  state={display: 'profile', 
      active: true}

  handleClick=(e)=>{
    this.setState({display: e.target.id, 
    element: e.target})
  }
  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = ()=>{
      switch(this.state.display){
        case 'profile': return <Profile/>
        case 'photo': return <Photos/>
        case 'cocktail': return <Cocktails/>
        case 'pokemon': return <Pokemon/>
        default: return <Profile/>
      }
    
    }
    
    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
