import React, { useState } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import styledContactList from'./styledContactList';

function ContactList(props) {
  const [isOpened, setIsOpened] = useState(false);
  const [isExtended, setIsExtended] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    if (!isExtended) 
      return setIsOpened(!isOpened);
  }

  function handleExtend(e) {
    e.stopPropagation();
    return setIsExtended(!isExtended);
  }

  return (
    <div className={props.className} open={isOpened}>
      {(!isExtended || (isExtended && isOpened)) &&
        <h1>Messages</h1>
      }
      <ContactItem
        open={isOpened}
        extend={handleExtend}
        extended={isExtended}
        action={handleClick}
      />
    </div>
  );
}

export default styledContactList(ContactList);