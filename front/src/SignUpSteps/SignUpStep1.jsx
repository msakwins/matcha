import React from 'react';
import { SignUpStepsWrapper } from './SignUpStepsWrapper';
import { Link } from 'react-router-dom';
import { Title, Input, Button } from '../Styled';

const SignUpStep1 = () =>
<SignUpStepsWrapper className="step1" id="SignUpStep1">
  <Title>Create your account</Title>
  <div className="sign-up__fields">
    <Input placeholder="First Name" required type="text"/>
    <Input placeholder="Last Name" required type="text"/>
    <Input placeholder="E-mail" required type="text"/>
    <Input placeholder="Password" required type="text"/>
  </div>
  <Button simple="true" as={Link} className="sign-in__forgot-password" to="/">Already have an account?</Button>
  <div className="sign-up__required">
    <span>* </span>
    These informations are required to continue
  </div>
</SignUpStepsWrapper>

export default SignUpStep1;