import React from 'react'

import SideMenuList from './SideMenuList'

const SideMenu = () => {
  return (
    <>
      <aside id="sideMenu" className="menu column is-one-fifth has-background-dark">
        <p className="menu-label has-text-warning ">
          General
        </p>
        <ul className="menu-list ">
          <li><a className="has-text-warning">Home</a></li>
          <li><a className="has-text-warning">Search for a recipe</a></li>
        </ul>
        <p className="menu-label has-text-warning">
          Account
        </p>
        <ul className="menu-list">
          <li><a className="has-text-warning">Profile</a></li>
          <li><a className="has-text-warning">Personal details</a></li>
          <li><a className="has-text-warning">settings</a></li>
          <li><a className="has-text-warning">Meal Plan</a></li>
          <li><a className="has-text-warning">Shoping List starter</a></li>
        </ul>
      </aside>
        <SideMenuList />
    </>
  )
}

export default SideMenu
