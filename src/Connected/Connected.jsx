import React from 'react';
import ConnectedWrapper from './ConnectedWrapper';
import { withRouter, Route } from 'react-router-dom';
import FavList from '../FavList/FavList';
import MessageList from '../MessageList/MessageList';
import Profile from '../Profile/Profile';
import MyProfile from '../MyProfile/MyProfile';
import Settings from '../Settings/Settings';
import ContactList from '../ContactList/ContactList';
import HomePage from '../HomePage/HomePage';
import Slider from '../Slider/Slider';
import user from '../User';

const Connected = (props) =>
<ConnectedWrapper id="Connected" isLogged={props.isLogged}>
  <Route exact path="/" component={HomePage} />
  <Route path="/favs" component={FavList} />
  <Route path="/messages" component={ContactList} />
  <Route path="/profile" component={Profile} />
  <Route path="/messageid" component={MessageList} />
  <Route path="/slide" component={Slider} />
  <Route path="/my-profile" render={() =>
    <MyProfile user={user} />
  }/>
  <Route path="/settings" render={() =>
    <Settings
      handleTheme={props.handleTheme}
      handleLogging={props.handleLogging}
      isLogged={props.isLogged}
    />
  }/>
</ConnectedWrapper>
  
export default withRouter(Connected);