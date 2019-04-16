import React from 'react';
import styledProfile from'./styledProfile';

class Profile extends React.Component {
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={className}>
      </div>
    );
  }
}

export default styledProfile(Profile);