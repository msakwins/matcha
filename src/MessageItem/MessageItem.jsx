import React from 'react';
import MessageItemWrapper from'./MessageItemWrapper';

function MessageItem({ mine }) {
  return (
    <MessageItemWrapper mine={mine}>
      Hello
    </MessageItemWrapper>
  );
}

export default MessageItem;