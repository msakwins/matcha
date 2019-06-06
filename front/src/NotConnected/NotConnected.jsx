import React from 'react';
import { withRouter } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Recover from '../pages/Recover/Recover';

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