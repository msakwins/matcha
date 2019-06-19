import React from 'react';
import { withRouter } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Recover from '../Recover/Recover';

const NotConnected = (props) => {
  
  if (props.location.pathname === '/recover') {
    return <Recover />
  }
  if (props.location.pathname === '/') {
    return <SignIn handleLogging={props.handleLogging} isLogged={props.isLogged} />
  }
  else
    return <SignUp />
}
  
export default withRouter(NotConnected);