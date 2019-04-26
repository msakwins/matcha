import React, { useState } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { Title } from '../Styled';
import MessageList from '../MessageList/MessageList';                            
import ContactListWrapper from'./ContactListWrapper';

function ContactList() {
  const [preview, setPreview] = useState(0);
  const [view, setView] = useState(0);

  function handlePreview(e) {
    e.stopPropagation();
    if ((view === 0 || view === 2) && preview === 0) 
      return setPreview(1);
    else if ((view === 0 || view === 2) && preview === 1) 
      return setPreview(2);
    else if ((view === 0 || view === 2) && preview === 2) 
      return setPreview(1);
  }

  function handleView(e) {
    e.stopPropagation();
    if (view === 0) 
      return setView(1);
    if (view === 1) {
      setView(2);
      setPreview(2);
    }
    if (view === 2) 
      return setView(1);
  }

  return (
    <ContactListWrapper preview={preview} view={view}>
      <Title>Messages</Title>
      <ContactItem
        preview={preview}
        handleView={handleView}
        view={view}
        handlePreview={handlePreview}
      />
      <MessageList view={view} preview={preview} />
    </ContactListWrapper>
  );
}

export default ContactList;