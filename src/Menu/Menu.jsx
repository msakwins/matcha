import React from 'react';
import MenuWrapper from'./MenuWrapper';
// import SubMenu from '../SubMenu/SubMenu';
import { withRouter } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';

const menuItems = [
  {
    bg: '/settings.svg',
    selected: '/settings-selected.svg',
    path: '/settings',
  },
  {
    bg: '/heart.svg',
    selected: '/heart-selected.svg',
    path: '/favs',
  },
  {
    path: '/',
  },
  {
    bg: '/chat.svg',
    selected: '/chat-selected.svg',
    path: '/messages',
  },
  {
    path: '/my-profile',
  },

];

const Menu = ({ handleSearch, openSearch, url }) =>
{
  return (
    <MenuWrapper
      search={openSearch}
      menuItem={menuItems}
    >
      {/*<button className="menu__button-search" onClick={props.action} /> */}
      {menuItems.map((menuItem, index) => (
        <MenuItem menuItem={menuItem} key={index} url={url}/>
        ))}
    </MenuWrapper>
  )
}

export default withRouter(Menu);