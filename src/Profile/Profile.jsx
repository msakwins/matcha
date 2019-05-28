import React, { useState } from 'react';
import TagList from '../TagList/TagList';
import SuperLike from '../SuperLike/SuperLike';
import ProfileWrapper from'./ProfileWrapper';
import Slider from '../Slider/Slider';

function Profile(props) {
  const [openPhoto, setOpenPhoto] = useState(false);

  function handleOpenPhoto() {
      return setOpenPhoto(!openPhoto);
  }

  return (
    <ProfileWrapper like={props.like} photo={openPhoto} content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
      <img
        className="profile__user-photo"
        alt="user"
        src="user.png"
        onClick={handleOpenPhoto}
      />

      <span className="profile__user-name">Nioki</span>
      <SuperLike handleLike={props.handleLike} like={props.like} />
      { props.modal &&
        <div className="profile__love-modal">
          This will use a SUPER-LIKE 
          <button onClick={props.handleModal}>Yes, do it</button>
        </div>
      }
      <TagList />
      { openPhoto &&
        <Slider handleOpenPhoto={handleOpenPhoto} />
      }
      {console.log(props)}
    </ProfileWrapper>
  );
}

export default Profile;