import React from 'react';
import SignInWrapper from './SignInWrapper';
import { Input, Button, Title, Link } from '../Styled';
import Logo from '../Logo/Logo';

function SignIn({ handleLogging, isLogged }) {
  return (
    <SignInWrapper light>
      <Logo />
      <Title className="sign-in__welcome">Welcome</Title>
      <Input placeholder="Login" type="text"/>
      <Input
        placeholder="Password"
        type="text"
        />
      <Link className="sign-in__forgot-password" to="/recover">Forgot your password?</Link>
      <Button greyBorder onClick={handleLogging}>Login</Button>
      <div className="signin__signup">
        <span>You don't have an account yet? </span>
        <Button as={Link} to="/register">Register</Button>
      </div>
    </SignInWrapper>
  );
}

export default SignIn;
