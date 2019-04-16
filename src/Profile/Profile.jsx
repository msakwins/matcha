import React from 'react';
import styledProfile from'./styledProfile';

function Profile(props) {
  return (
    <div className={props.className}>
      <img alt="user" src="user.png"></img>
      <span>Nioki</span>
    </div>
  );
}

export default styledProfile(Profile);