import React, { useState } from 'react';
import TagList from '../TagList/TagList';
import MyProfileWrapper from'./MyProfileWrapper';


function MyProfile(props) {
  const [openPhoto, setOpenPhoto] = useState(false);

  function handleOpenPhoto() {
      return setOpenPhoto(!openPhoto);
  }

  return (
    <MyProfileWrapper photo={openPhoto}>
      <img
        className="profile__user-photo"
        alt="user"
        src="user.png"
        onClick={handleOpenPhoto}
      />
      <div className="profile__info">
        <span className="profile__name">Nioki</span>
        <span className="profile__age">24</span>
        <span className="profile__activity">Freelance cat</span>
        <img className="my-profile__edit" alt="edit" src="/edit.svg"></img>
      </div>
      <TagList />
      <div className="profile__about">
        <h2>About me</h2>
        <p>
          <span className="profile__about-cat">First Name: </span>
          <span className="profile__about-text">Nioki</span>
        </p>
        <p>
          <span className="profile__about-cat">Last Name: </span>
          <span className="profile__about-text">Bouss</span>
        </p>
        <p>
          <span className="profile__about-cat">e-mail: </span>
          <span className="profile__about-text">nioki@mail.com</span>
        </p>
        <p>
          <span className="profile__about-cat">City: </span>
          <span className="profile__about-text">San Francisco</span>
        </p>
        <p>
          <span className="profile__about-cat">City: </span>
          <span className="profile__about-text">San Francisco</span>
        </p>
        <p>
          <span className="profile__about-cat">City: </span>
          <span className="profile__about-text">San Francisco</span>
        </p>
      </div>
    </MyProfileWrapper>
  );
}

export default MyProfile;