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
import BuySuperLikes from '../BuySuperLikes/BuySuperLikes';
import MyInformations from '../MyInformations/MyInformations.jsx';
import About from '../About/About';
import user from '../User';
import me from '../Me';
import Notification from '../Notification/Notification';
import Rate from '../Rate/Rate';

const Connected = (props) =>
<ConnectedWrapper id="Connected" isLogged={props.isLogged}>
  <Route exact path="/" component={HomePage} />
  <Route path="/favs" render={() =>
    <FavList user={user}
      like={props.like}
    />
  } />
  <Route path="/messages" component={ContactList} />
  <Route path="/superlikes" component={BuySuperLikes} />
  <Route path="/about" component={About} />
  <Route path="/profile" render={() => 
    <Profile
      handleModal={props.handleModal}
      handleLike={props.handleLike}
      like={props.like}
      modal={props.modal}
      user={user}
    />
  } />
  <Route path="/messageid" component={MessageList} />
  <Route path="/rate" render={() =>
    <Rate handleRate={props.handleRate} rate={props.rate} /> 
  }/>

  <Route path="/settings/my-infos" render={() =>
    <MyInformations user={user} />
  } />
  <Route path="/my-profile" render={() =>
    <MyProfile me={me} />
  } />
  <Route exact path="/settings" render={() =>
    <Settings
      user={user}
      handleTheme={props.handleTheme}
      handleLogging={props.handleLogging}
      isLogged={props.isLogged}
    />
  } />
  <Notification user={user} notification={true}/>
</ConnectedWrapper>
  
export default withRouter(Connected);