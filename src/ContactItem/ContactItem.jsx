import React from 'react';
import styledContactItem from'./styledContactItem';

function ContactItem(props) {
  return (
    <div className={props.className}>
      <div className="contact-item__message-list">
        Hello
      </div>
      <div className="contact-item__send-block">
        <input placeholder="Type your message here"></input>
        <button className={`contact-item__send ${props.open && 'open-button'}`}></button>
      </div>
    </div>
  );
}

export default styledContactItem(ContactItem);