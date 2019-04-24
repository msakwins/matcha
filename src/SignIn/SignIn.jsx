import React from 'react';
import SignInWrapper from './SignInWrapper';
import { Input, Button, Link, BLink } from '../Styled';

function SignIn({ handleLogging, isLogged }) {
  return (
    <SignInWrapper>
      <Input placeholder="Login" type="text"/>
      <Input
        placeholder="Password"
        type="text"
        />
      <div className="signin__forgot-password">
        <span>Forgot your password? </span>
        <Link to="/recover">reset my password</Link>
      </div>
      <Button onClick={handleLogging}>Login</Button>
      <div className="signin__signup">
        <span>You don't have an account yet? </span>
        <BLink to="/register">Register</BLink>
      </div>
    </SignInWrapper>
  );
}

export default SignIn;
