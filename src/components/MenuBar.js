import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  const active = props.active
  return (
    <div className="ui four item menu">
      <a className={`item ${active === 'profile'?"active":""}`} id="profile" onClick={props.handleClick}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={`item ${active === 'photo'?"active":""}`} id="photo" onClick={props.handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={`item ${active === 'cocktail'?"active":""}`} id="cocktail" onClick={props.handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={`item ${active === 'pokemon'?"active":""}`} id="pokemon" onClick={props.handleClick}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
