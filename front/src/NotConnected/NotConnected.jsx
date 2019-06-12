import React from 'react';
import { withRouter } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Recover from '../Recover/Recover';

const NotConnected = (props) => {
  if (props.location.pathname === '/register') {
    return <SignUp />
  }
  
  else if (props.location.pathname === '/recover') {
    return <Recover />
  }
  
  else return <SignIn handleLogging={props.handleLogging} isLogged={props.isLogged} />
}
  
export default withRouter(NotConnected);