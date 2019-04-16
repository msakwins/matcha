import React from 'react';
import styledSignIn from './styledSignIn';
import { Input, Button, Link, BLink } from '../Styled';

function SignIn(props) {
  return (
    <div className={props.className}>
      <h1>sign in</h1>
      <Input placeholder="Login" type="text"/>
      <Input
        placeholder="Password"
        type="text"
        />
      <div className="signin__forgot-password">
        <span>Forgot your password? </span>
        <Link to="/recover">reset my password</Link>
      </div>
      <Button onClick={props.action}>Login</Button>
      <div className="signin__signup">
        <span>You don't have an account yet? </span>
        <BLink to="/register">Register</BLink>
      </div>
    </div>
  );
}

export default styledSignIn(SignIn);
