import React from 'react';
import HeaderWrapper from'./HeaderWrapper';
import { Link } from 'react-router-dom';

const Header = () =>
  <HeaderWrapper>
    <Link to="/" className="logo">
      M33t
    </Link>
  </HeaderWrapper>

export default Header;