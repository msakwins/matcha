import React from 'react';
import MessageItem from '../MessageItem/MessageItem';
import MessageUserWrapper from'./MessageUserWrapper';
import Send from '../Styled/Send';

const MessageUser = () =>
  <MessageUserWrapper id="MessageUser">
    <div className="message-user">
      <MessageItem mine={true} />
      <MessageItem mine={false} />
      <MessageItem mine={false} />
    </div>
    <Send />
  </MessageUserWrapper>

export default MessageUser;