import React from 'react';
import ConnectedWrapper from './ConnectedWrapper';
import { withRouter, Route } from 'react-router-dom';
import { About, Rate, BuySuperLikes, FavList, MessageList, Profile, MyProfile, Messages, Settings, HomePage, MyInformations } from '../pages';
import user from '../User';
import me from '../Me';
import Notification from '../components/Notification/Notification';

const Connected = (props) =>
<ConnectedWrapper id="Connected" isLogged={props.isLogged}>
  <Route exact path="/" component={HomePage} />
  <Route path="/favs" render={() =>
    <FavList user={user}
      like={props.like}
    />
  } />
  <Route path="/messages" component={Messages} />
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
</ConnectedWrapper>
  
export default withRouter(Connected);