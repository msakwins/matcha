import React from 'react';
import MenuItemWrapper from './MenuItemWrapper';

const MenuItem = ({ menuItem: { path, bg, selected }, url }) =>
  <MenuItemWrapper
    to={path ? path : '/'}
    bg={bg}
    selected={selected}
    url={url}
    path={path}
  >
  { path === '/' &&
    <span className="menu-item__logo">M33t</span>
  }
</MenuItemWrapper>

export default MenuItem;