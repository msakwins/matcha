import React from 'react';
import styledSignUp from'./styledSignUp';
import { Input, Button } from '../Styled';

function SignUp(props) {
  return (
    <div className={props.className}>
      <Input placeholder="First Name" type="text"/>
      <Input placeholder="Last Name" type="text"/>
      <Input placeholder="E-mail" type="text"/>
      <Button>Next</Button>
    </div>
  );
}

export default styledSignUp(SignUp);
