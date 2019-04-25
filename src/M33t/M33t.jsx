import React from 'react';
import M33tWrapper from './M33tWrapper';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import FavList from '../FavList/FavList';
import MessageList from '../MessageList/MessageList';
import Profile from '../Profile/Profile';
import MyProfile from '../MyProfile/MyProfile';
import Settings from '../Settings/Settings';
import ContactList from '../ContactList/ContactList';
import HomePage from '../HomePage/HomePage';
import { withRouter, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Recover from '../Recover/Recover';


const M33t = (props) => {
  if (!props.isLogged) {
    
    if (props.location.pathname === '/register') {
      return <SignUp />
    }

    else if (props.location.pathname === '/recover') {
      return <Recover />
    }

    else return <SignIn handleLogging={props.handleLogging} isLogged={props.isLogged} />
  }

  else return (
  <M33tWrapper isLogged={props.isLogged}>
    <Menu url={props.location.pathname} />
    <Route path="/login" component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route exact path="/" component={HomePage} />
    <Route path="/favs" component={FavList} />
    <Route path="/messages" component={ContactList} />
    <Route path="/profile" component={Profile} />
    <Route path="/messageid" component={MessageList} />
    <Route path="/my-profile" component={MyProfile} />
    <Route path="/settings" render={(props) =>
    <Settings {...props}
      handleTheme={props.handleTheme}
      handleLogging={props.handleLogging}
      isLogged={props.isLogged}
    />} />
    {console.log(props.isLogged)}
  </M33tWrapper>
  );
};

export default withRouter(M33t);