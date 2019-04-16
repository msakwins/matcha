import React, { useState } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import styledContactList from'./styledContactList';
import { Link } from 'react-router-dom';

function ContactList(props) {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    return setIsOpened(!isOpened);
  }
  return (
    <div className={props.className}>
    {console.log(isOpened)}
      <h1>Messages</h1>
      <div className={`contact-list__item ${isOpened ? 'open' : ''}`}>
        <div className="contact-list__item-preview">
        <Link to="/profile">
          <img className="contact-list__user-image" alt="user" src="/user.png"></img>
          <span className="contact-list__user-name">Nioki</span>
        </Link>
          <button onClick={handleClick}></button>
        </div>
        { isOpened &&
          <ContactItem open={isOpened} />
        }
      </div>
    </div>
  );
}

export default styledContactList(ContactList);