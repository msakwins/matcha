import React from 'react';
import styledSignIn from './styledSignIn';
import { Input, Button, Link } from '../Styled';

class SignIn extends React.Component {
  render() {
    const {
      className,
    } = this.props;

    return (
      <div className={className}>
        <h1>sign in</h1>
        <Input placeholder="Login" type="text"/>
        <Input
          placeholder="Password"
          type="text"
        />
        <Button>login</Button>
        <div className="homepage__link">
          <div className="homepage__forgot-password">
            <span>Forgot your password? </span>
            <Link to="/recover">reset my password</Link>
          </div>
          <div className="homepage__register-account">
            <span>You don't have an account yet? </span>
            <Link to="/register">register</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default styledSignIn(SignIn);
