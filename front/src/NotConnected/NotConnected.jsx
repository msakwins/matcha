import React from 'react';
import { withRouter } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Recover from '../Recover/Recover';

const NotConnected = (props) => {
  
  const path = props.location.pathname;

  if (path === '/recover') {
    return <Recover />
  }

  if (path === '/register/step1' || path === '/register/step2' || path === '/register/step3')
    return <SignUp />

  else
    return <SignIn handleLogging={props.handleLogging} isLogged={props.isLogged} />
}
  
export default withRouter(NotConnected);