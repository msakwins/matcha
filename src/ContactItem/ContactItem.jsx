import React from 'react';
import MessageList from '../MessageList/MessageList';                                 
import styledContactItem from'./styledContactItem';
import { Link } from 'react-router-dom';

function ContactItem(props) {
  return (
    <div className={`${props.className} ${props.open && 'open'} ${props.extended && 'extend'}`} onClick={props.extend}>
      <div className="contact-list__item-preview">
        <Link to="/profile">
          <img className="contact-list__user-image" alt="user" src="/user.png"></img>
          <span className="contact-list__user-name">Nioki</span>
        </Link>
        <button className={`contact-list__open-button ${props.open? 'minus' : 'plus'}`} onClick={props.action}></button>
      </div>
    <div className={`contact-item__message-list ${props.open && 'open'}`}>
      <MessageList extended={props.extended} />
      <div className="contact-item__send-block">
        <input placeholder="Type your message here"></input>
        <button className={`contact-item__send ${props.open && 'open-button'}`}></button>
      </div>
    </div>
    </div>
  );
}

export default styledContactItem(ContactItem);