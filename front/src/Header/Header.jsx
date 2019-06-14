import React from 'react';
import HeaderWrapper from'./HeaderWrapper';
import { Title } from '../Styled';
import Logo from '../Logo/Logo';

function HeaderPath(path) {
  if (path === "/messages")
    return("Messages");
  else if (path === "/matches")
    return("Matches");
  else if (path === "/settings")
    return("Settings");
  else if (path === "/my-profile")
    return("My profile");
  else if (path === "/settings/my-infos")
    return("My informations");
  else
    return(<Logo />);

}

const Header = (props) =>
  <HeaderWrapper id="HeaderWrapper">
    <Title>{HeaderPath(props.path)}</Title>
    <img src="me.jpg" alt="My profile"></img>
  </HeaderWrapper>

export default Header;