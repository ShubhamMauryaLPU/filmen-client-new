import React from 'react'
import "./NavListItem.css";
const NavListItems = ({nav}) => {
  return (
    <>
        <li><a href={nav.link} >{nav.name}</a></li>
    </>
  )
}

export default NavListItems;
