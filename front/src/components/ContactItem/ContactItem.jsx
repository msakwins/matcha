import React from 'react';
import ContactItemWrapper from'./ContactItemWrapper';
import { Link } from 'react-router-dom';

const ContactItem = ({ preview, handlePreview, view, handleView }) =>
  <ContactItemWrapper id="ContactItem" preview={preview} view={view} onClick={handleView}>
    <div className="contact-list__item-preview">
      <Link to="/profile">
        <img className="contact-list__user-image" alt="user" src="/user.png"></img>
        <span className="contact-list__user-name">Nioki</span>
      </Link>
      <button className={`contact-item__open-button ${preview === 1 ? 'minus' : 'plus'}`} onClick={handlePreview}></button>
    </div>
  </ContactItemWrapper>

export default ContactItem;