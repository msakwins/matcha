import React, { useState } from 'react';
import MenuWrapper from'./MenuWrapper';
// import SubMenu from '../SubMenu/SubMenu';
import { withRouter } from 'react-router-dom';

import { Button, LinkSettings, LinkFavs, LinkMessages, LinkProfile } from '../../Styled';

const Menu = (props) => {
  const {
    openSearch,
    location: { pathname },
  } = props;
  
  const [openMenu, setOpenMenu] = useState(false);
  const [menuclass, setMenuClass] = useState(null);

  function handleMenu() {
    setMenuClass(openMenu === true ? "-close" : "-open");
    setOpenMenu(!openMenu);
  }

  function handleCloseMenu() {
    if (openMenu === true) {
      setOpenMenu(false);
      setMenuClass("-close");

    }
    else {
      setOpenMenu(openMenu);
    }
  }

  return (
    <MenuWrapper
    id="Menu"
    search={openSearch}
    open={openMenu}
    menuclass={menuclass}
    >
      {/*<button className="menu__button-search" onClick={props.action} /> */}
    <LinkSettings onClick={handleCloseMenu} menuclass={menuclass} selected={pathname === "/settings"} to="/settings">
      <span>Settings</span>
    </LinkSettings>
    <LinkFavs onClick={handleCloseMenu} menuclass={menuclass} selected={pathname === "/favs"} to="/favs">
      <span>Matches</span>
    </LinkFavs>
    <LinkMessages onClick={handleCloseMenu} menuclass={menuclass} selected={pathname === "/messages"} to ="/messages">
      <span>Messages</span>
    </LinkMessages>
    <LinkProfile onClick={handleCloseMenu} menuclass={menuclass} selected={pathname === "/my-profile"} to ="/my-profile">
      <span>My profile</span>
    </LinkProfile>
    <div onClick={handleMenu} className="menu__close-button">...</div>
    </MenuWrapper>
  )
}

export default withRouter(Menu);