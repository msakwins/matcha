import React from 'react';
import SignUpStepsWrapper from './SignUpStepsWrapper';
import { Title, Input, Button } from '../../Styled';

  const SignUpSteps = ({ page }) =>
  <SignUpStepsWrapper page={page}>
    <div className="sign-up__first-step">
      <Title>Create your account</Title>
      <div className="sign-up__fields">
        <Input placeholder="First Name" type="text"/>
        <Input placeholder="Last Name" type="text"/>
        <Input placeholder="E-mail" type="text"/>
        <Input placeholder="Password" type="text"/>
      </div>
    </div>

    <div className="sign-up__second-step">
      <Title>Fill your profile</Title>
      <div className="sign-up__fields">
        <div className="sign-up__photo">
          <img alt="" src="/user.png"></img>
          <Input placeholder="../users/marion"></Input>
          <Button small bg="/photo.svg" nude/>
        </div>
        <span className="sign-up__filled">Marion</span>
        <span className="sign-up__filled">Skw</span>
        <span className="sign-up__filled">marion.s@mail.com</span>
        <Input placeholder="Age" type="number"/>
        <Input placeholder="Activity" type="text"/>
        <Input placeholder="Interests" type="text"/>
        <Input placeholder="Interests" type="text"/>
        <Input placeholder="Interests" type="text"/>
        <Input placeholder="Interests" type="text"/>
      </div>
    </div>

    <div className="sign-up__third-step">
      <Title>What are you looking for ?</Title>
      <div className="sign-up__fields">
        <Input placeholder="Age" type="number"/>
        <Input placeholder="Interests" type="text"/>
      </div>
    </div>
  </SignUpStepsWrapper>

export default SignUpSteps;