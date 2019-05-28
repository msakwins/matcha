import React from 'react';
import SignInWrapper from './SignInWrapper';
import { Link } from 'react-router-dom';
import { Input, Button, Title } from '../Styled';

function SignIn({ handleLogging, isLogged }) {
  return (
    <SignInWrapper light>
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
        <Button grey as={Link} to="/register">Register</Button>
      </div>
    </SignInWrapper>
  );
}

export default SignIn;
