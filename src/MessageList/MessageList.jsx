import React from 'react';
import MessageItem from '../MessageItem/MessageItem';
import styledMessageList from'./styledMessageList';

function MessageList(props) {
  const mine = true;
  return (
    <div className={props.className}>
      <MessageItem mine={mine} />
      <MessageItem mine={false} />
      <MessageItem mine={false} />
    </div>
  );
}

export default styledMessageList(MessageList);