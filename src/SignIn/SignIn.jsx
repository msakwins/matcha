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
      <Link className="sign-in__forgot-password" to="/recover">Forgot your password?</Link>
      <Button onClick={handleLogging}>Login</Button>
      <div className="signin__signup">
        <span>You don't have an account yet? </span>
        <BLink to="/register">Register</BLink>
      </div>
    </SignInWrapper>
  );
}

export default SignIn;
