import React from 'react';
import styledHeader from'./styledHeader';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={className}>
        <Link to="/" className="logo">
          M33t
        </Link>
      </div>
    );
  }
}

export default styledHeader(Header);