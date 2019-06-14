import React, { useState } from 'react';
import SignInWrapper from './SignInWrapper';
import { Input, Button, Title } from '../Styled';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function SignIn({ handleLogging, isLogged }) {
  return (
    <SignInWrapper>
      <Logo />
      <Title className="sign-in__welcome">Welcome</Title>
      <Input
        error="Incorrect login"
        placeholder="Login"
        type="text"
        />
      <Input
        placeholder="Password"
        type="text"
        error="Incorrect password"
        />
      <Button simple="true" as={Link} className="sign-in__forgot-password" to="/recover">Forgot your password?</Button>
      <Button color="mediumGrey" onClick={handleLogging}>Login</Button>
      <div className="signin__signup">
        <span>You don't have an account yet? </span>
        <Button color="darkGrey" as={Link} to="/register">Register</Button>
      </div>
    </SignInWrapper>
  );
}

export default SignIn;
