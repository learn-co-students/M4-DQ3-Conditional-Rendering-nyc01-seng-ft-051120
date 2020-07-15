import React from 'react'
import { Profile } from './Pages'

class MenuBar extends React.Component{

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  toggleActive = e => {

    console.log(e.target)
    const classes = Array.from(e.target.closest('a').classList)
    
    if (classes.includes('active')){
        e.target.closest('a').classList.remove('active')
    } else {
        e.target.closest('a').classList.add('active')
    }
  }


  renderDiv = (e, divName)=> {
    console.log(e)
   this.toggleActive(e)
   this.props.selectOption(divName)

  }

  render(){  
    return (
      <div className="ui four item menu">
        <a className="item active" id="profile" onClick={(e)=>this.renderDiv(e, 'Profile')}>
          <i className="user large icon" id="profile"/>
        </a>

        <a className="item" id="photo" onClick={(e)=>this.renderDiv(e, 'Photo')}>
          <i className="photo large icon" id="photo"/>
        </a>

        <a className="item" id="cocktail" onClick={(e)=>this.renderDiv(e, 'Cocktail')}>
          <i className="cocktail large icon" id="cocktail"/>
        </a>

        <a className="item" id="pokemon" onClick={(e)=>this.renderDiv(e, 'Pokemon')}> 
          <i className=" themeisle large icon" id="pokemon"/>
        </a>
      </div>
    )
  }


}

export default MenuBar
