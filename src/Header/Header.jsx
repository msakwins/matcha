import React, { Fragment } from 'react';
import styledHeader from'./styledHeader';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const {
      className,
      logged,
    } = this.props;

    return (
      <div className={className} logged={logged}>
        <Link to="/" className="logo">
        </Link>
        <div className="logo">
          M33t
        </div>
      { logged &&
      <Fragment>
        <Link to="/profile" className={`homepage-bubble ${this.props.pathname === '/profile' ? 'selected' : ''}`}>
          <div></div>        
        </Link>
        <Link to='/settings' className="homepage-bubble settings">
          <div></div>
        </Link>
      </Fragment>
      }
      </div>
    );
  }
}

export default styledHeader(Header);