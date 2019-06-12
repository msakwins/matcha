import React from 'react';
import ConnectedWrapper from './ConnectedWrapper';
import { withRouter, Route } from 'react-router-dom';
import About from '../About/About';
import Rate from '../Rate/Rate';
import BuySuperLikes from '../BuySuperLikes/BuySuperLikes';
import Matches from '../Matches/Matches';
import Profile from '../Profile/Profile';
import MyProfile from '../MyProfile/MyProfile';
import Messages from '../Messages/Messages';
import MessageUser from '../MessageUser/MessageUser';
import Settings from '../Settings/Settings';
import HomePage from '../HomePage/HomePage';
import MyInformations from '../MyInformations/MyInformations';
import user from '../User';
import me from '../Me';
import Header from '../Header/Header';
import Notification from '../Notification/Notification';

const Connected = (props) =>
<ConnectedWrapper id="Connected" isLogged={props.isLogged}>
  <Route exact path="/" component={HomePage} />

  <Route path="/matches" render={() =>
    <Matches user={user}
    like={props.like}
    />
  } />

  <Route path="/messages" render={() =>
    <Messages
    user={user}
    />
  } />

  <Route path={`/message/${user.name}/${user.id}`} component={MessageUser} />

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

  <Route path="/rate" render={() =>
    <Rate handlePopularity={props.handlePopularity} popularityNice={props.popularityNice} popularitySmart={props.popularitySmart} user={user} /> 
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
  <Header path={props.path} />
</ConnectedWrapper>
  
export default withRouter(Connected);