import React from 'react';
import { SignUpStepsWrapper } from './SignUpStepsWrapper';
import { Title, Input } from '../Styled';

const SignUpStep3 = () =>
<SignUpStepsWrapper className="step3" id="SignUpStep3">
  <Title>What are you looking for ?</Title>
  <div className="sign-up__fields">
    <Input placeholder="Age" type="number"/>
    <Input placeholder="Interests" type="text"/>
  </div>
</SignUpStepsWrapper>

export default SignUpStep3;