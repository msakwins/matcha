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
    bg: '/user.png',
    path: '/my-profile',
  },
  {
    path: '/',
  },
  {
    bg: '/heart.svg',
    selected: '/heart-selected.svg',
    path: '/favs',
  },
  {
    bg: '/chat.svg',
    selected: '/chat-selected.svg',
    path: '/messages',
  },

];
function Menu(props) {
  return (
    <MenuWrapper
      search={props.openSearch}
      menuItem={menuItems}>
      {/*<button className="menu__button-search" onClick={props.action} /> */}
      {menuItems.map((menuItem, index) => (
        <MenuItem menuItem={menuItem} key={index} url={props.location.pathname}/>
        ))}
    </MenuWrapper>
  );
}

export default withRouter(Menu);