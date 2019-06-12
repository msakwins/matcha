import React from 'react';
import HeaderWrapper from'./HeaderWrapper';
import { Title } from '../Styled';

const Header = (props) =>
  <HeaderWrapper id="HeaderWrapper">
    <Title>{props.path.slice(1)}</Title>
    <img src="me.jpg" alt="My profile"></img>
  </HeaderWrapper>

export default Header;