import React, { useState } from 'react';
import TagList from '../TagList/TagList';
import MyProfileWrapper from'./MyProfileWrapper';


function MyProfile(props) {
  const [openPhoto, setOpenPhoto] = useState(false);

  function handleOpenPhoto() {
      return setOpenPhoto(!openPhoto);
  }

  const {
    user
  } = props


  return (
    <MyProfileWrapper id="MyProfile" photo={openPhoto}>
      <div className="my-profile__user-photo" onClick={handleOpenPhoto}>
        <img
          alt="user"
          src={user.photo1}
          />
          { openPhoto &&
            <div className="my-profile__user-photo__info">
              <span>{user.firstName}</span>
              <span>{user.age} y.</span>
            </div>
          }
      </div>
      <div className="my-profile__user-info">
        <div className="profile__info">
          <span className="profile__name">{user.firstName}</span>
          <span className="profile__age">{user.age}y.</span>
          <span className="profile__activity">{user.activity}</span>
          <img className="my-profile__edit" alt="edit" src="/edit.svg"></img>
        </div>
        <TagList />
        <div className="profile__about">
          <h2>About me</h2>
          <p>
            <span className="profile__about-cat">First Name: </span>
            <span className="profile__about-text">{user.firstName}</span>
          </p>
          <p>
            <span className="profile__about-cat">Last Name: </span>
            <span className="profile__about-text">{user.lastName}</span>
          </p>
          <p>
            <span className="profile__about-cat">e-mail: </span>
            <span className="profile__about-text">{user.email}</span>
          </p>
          <p>
            <span className="profile__about-cat">City: </span>
            <span className="profile__about-text">{user.city}</span>
          </p>
        </div>
      </div>
    </MyProfileWrapper>
  );
}

export default MyProfile;