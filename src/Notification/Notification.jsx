import React from 'react';
import NotificationWrapper from './NotificationWrapper';

const Notification = ({ user, notification }) =>
<NotificationWrapper id="Notification" notification={notification}>
<img alt={user.firstName} src={user.photo1}></img>
  <span>{user.firstName} visited your profile</span>
</NotificationWrapper>

export default Notification;