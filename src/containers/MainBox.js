import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    active: false,
    selectedId: ''
  }
  

  handleSelectedMenu = (event) => {
    this.setState({
      active: true,
      selectedId: event.target.id
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <MenuBar handleSelectedMenu={this.handleSelectedMenu}/>
        {this.state.active && this.state.selectedId === "profile" ? <Profile /> : null}
        {this.state.active && this.state.selectedId === "photo" ? <Photos /> : null}
        {this.state.active && this.state.selectedId === "cocktail" ? <Cocktails /> : null}
        {this.state.active && this.state.selectedId === "pokemon" ? <Pokemon /> : null}
      </div>
    )
  }
}

export default MainBox
