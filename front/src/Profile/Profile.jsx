import React, { useState } from 'react';
import TagList from '../TagList/TagList';
import Like from '../Like/Like';
import ProfileWrapper from'./ProfileWrapper';
import Slider from '../Slider/Slider';
import Popularity from '../Popularity/Popularity';

function Profile(props) {
  const [openPhoto, setOpenPhoto] = useState(false);

  function handleOpenPhoto() {
      return setOpenPhoto(!openPhoto);
  }

  const {
    user
  } = props;

  return (
    <ProfileWrapper like={props.like} photo={openPhoto} content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
      <Popularity popularity={user.popularity} />
      <img
        className="profile__user-photo"
        alt="user"
        src="user.png"
        onClick={handleOpenPhoto}
      />

      <span className="profile__user-name">Nioki</span>
      <Like handleLike={props.handleLike} like={props.like} />
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
    </ProfileWrapper>
  );
}

export default Profile;