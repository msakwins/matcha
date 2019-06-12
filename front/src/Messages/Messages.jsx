import React, { useState } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import MessagesWrapper from'./MessagesWrapper';

const Messages = ({ user }) =>
  <MessagesWrapper id="Messages">
    <ContactItem messagePath={`/${user.firstName}/${user.id}`} />
  </MessagesWrapper>

export default Messages;