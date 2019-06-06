import React from 'react';
import MessageItem from '../MessageItem/MessageItem';
import MessageListWrapper from'./MessageListWrapper';
import Send from '../Styled/Send';

const MessageList = ({ view, preview }) =>
  <MessageListWrapper view={view} preview={preview}>
    <div className="message-list">
      <MessageItem mine={true} />
      <MessageItem mine={false} />
      <MessageItem mine={false} />
    </div>
    <Send view={view} preview={preview} />
  </MessageListWrapper>

export default MessageList;