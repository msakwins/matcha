import React from 'react';
import styledMenu from'./styledMenu';
import { Link } from 'react-router-dom';

function Menu(props) {

  return (
    <div className={props.className}>
      <Link to="/messages"/>
    </div>
  );
}

export default styledMenu(Menu);