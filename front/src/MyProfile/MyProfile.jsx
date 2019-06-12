import React, { useState } from 'react';
import TagList from '../TagList/TagList';
import MyProfileWrapper from'./MyProfileWrapper';
import Popularity from '../Popularity/Popularity';


function MyProfile(props) {
  const [openPhoto, setOpenPhoto] = useState(false);

  function handleOpenPhoto() {
      return setOpenPhoto(!openPhoto);
  }

  const {
    me: { popularity, firstName, age, activity, photo1 },
  } = props;

  return (
    <MyProfileWrapper id="MyProfile" photo={openPhoto}>
      <Popularity popularity={popularity} />
      <div className="my-profile__user-photo" onClick={handleOpenPhoto}>
        <img
          alt={firstName}
          src={photo1}
          />
          { openPhoto &&
            <div className="my-profile__user-photo__info">
              <span>{firstName}</span>
              <span>{age} y.</span>
            </div>
          }
      </div>
      <div className="my-profile__user-info">
        <div className="profile__info">
          <span className="my-profile__text-bold">{firstName}</span>
          <span className="my-profile__text-color">{age}y.</span>
          <span className="my-profile__text">{activity}</span>
          <img className="my-profile__edit" alt="edit" src="/edit.svg"></img>
        </div>
        <TagList />
      </div>
    </MyProfileWrapper>
  );
}

export default MyProfile;