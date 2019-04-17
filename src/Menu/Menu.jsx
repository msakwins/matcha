import React, { useState } from 'react';
import MenuWrapper from'./MenuWrapper';
// import SubMenu from '../SubMenu/SubMenu';
import { Link } from 'react-router-dom';

function Menu(props) {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  function handleSubMenu() {
      return setOpenSubMenu(!openSubMenu);
  }
  return (
    <MenuWrapper subMenu={openSubMenu}>
    <div className="menu__sub-menu">
      <Link to="/settings" className="menu__link-settings" />
      <Link to="/favs" className="menu__link-fav" />
      <Link to="/messages" className="menu__link-messages" />
    </div>
    <div className="menu__main-menu">
      <Link to="/my-profile" className="menu__link-profile" />
      <button className="menu__button-sub-menu" onClick={handleSubMenu}/>
    </div>
    </MenuWrapper>
  );
}

export default Menu;