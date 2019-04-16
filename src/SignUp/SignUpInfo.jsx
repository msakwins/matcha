import React from 'react';
import styledHomePage from'./styledSignUp';

class SignUp extends React.Component {
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={className}>
        <label>Name</label>
        <input type="text"></input>
        <label>Surname</label>
        <input type="text"></input>
        <label>e-Mail</label>
        <input type="text"></input>
        <label>Surname</label>
        <input type="text"></input>
        <label>Age</label>
        <input type="text"></input>
        Next
      </div>
    );
  }
}

export default styledHomePage(SignUp);
