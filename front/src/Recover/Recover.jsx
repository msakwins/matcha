import React from 'react';
import RecoverWrapper from './RecoverWrapper';
import { Title, Input, Button } from '../Styled';

const Recover = () =>
  <RecoverWrapper>
    <Title>Reset your password</Title>
    <Input placeholder="New password"></Input>
    <Input placeholder="Password confirmation"></Input>
    <Button>Reset</Button>
  </RecoverWrapper>

export default Recover;