import React, { useState } from 'react';
import TagList from '../TagList/TagList';
import SuperLike from '../SuperLike/SuperLike';
import ProfileWrapper from'./ProfileWrapper';

function Profile(props) {
  const [openPhoto, setOpenPhoto] = useState(false);
  const [like, setLike] = useState(0);
  const [modal, setModal] = useState(false);

  function handleOpenPhoto() {
      return setOpenPhoto(!openPhoto);
  }

  function handleModal() {
    setModal(false);
    setLike(2);
  }

  function handleLike() {
    if (like === 0)
      return setLike(1);
    else if (like === 1)
      return setModal(true);
  }

  return (
    <ProfileWrapper like={like} photo={openPhoto} content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
      <img
        className="profile__user-photo"
        alt="user"
        src="user.png"
        onClick={handleOpenPhoto}
      />
      <span className="profile__user-name">Nioki</span>
      <SuperLike handleLike={handleLike} like={like} />
      { modal &&
        <div className="profile__love-modal">
          This will use a SUPER-LIKE 
          <button onClick={handleModal}>Yes, do it</button>
        </div>
      }
      <TagList />
    </ProfileWrapper>
  );
}

export default Profile;