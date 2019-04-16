import React from 'react';
import SignIn from '../SignIn/SignIn';
import styledHomePage from'./styledHomePage';

class HomePage extends React.Component {
  render() {
    const {
      className,
      logged,
    } = this.props;

    return (
      <div className={className}>
      { logged &&
      <div>
        Hello
      </div>
      }
      { !logged &&
        <SignIn />
      }
      </div>
    );
  }
}

export default styledHomePage(HomePage);
