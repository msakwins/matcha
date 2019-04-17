import React from 'react';
import SubMenuWrapper from './SubMenuWrapper';
import { Link } from 'react-router-dom';

const SubMenu = () =>
  <SubMenuWrapper>
      <Link to="/favs" className="sub-menu__link-fav" />
      <Link to="/settings" className="sub-menu__link-settings" />
  </SubMenuWrapper>

  export default SubMenu;