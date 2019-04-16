import React from 'react';
import styledSignUp from'./styledSignUp';
import { Input, Button, Link } from '../Styled';

class SignUp extends React.Component {
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={className}>
        <label>First Name</label>
        <Input type="text"/>
        <label>Last Name</label>
        <Input type="text"/>
        <label>E-mail</label>
        <Input type="text"/>
        <label>Age</label>
        <Input type="text"/>
        <Button>Next</Button>
      </div>
    );
  }
}

export default styledSignUp(SignUp);
