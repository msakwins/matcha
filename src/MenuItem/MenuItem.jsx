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
    <span className="menu-item__logo"></span>
  }
  { path === '/my-profile' &&
  <span className="menu-item__profile"></span>
  }
</MenuItemWrapper>

export default MenuItem;