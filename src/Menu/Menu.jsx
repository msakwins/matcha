import React from 'react';
import styledMenu from'./styledMenu';
import { Link } from 'react-router-dom';

function Menu(props) {

  return (
    <div className={props.className}>
      <Link to="/settings" className="menu__link-settings" />
      <Link to="/" className="menu__link-back" />
      <Link to="/favs" className="menu__link-fav" />
      <Link to="/messages" className="menu__link-messages" />
    </div>
  );
}

export default styledMenu(Menu);