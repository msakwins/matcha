import React, { useState } from 'react';
import TagList from '../TagList/TagList';
import MyProfileWrapper from'./MyProfileWrapper';


function MyProfile(props) {
  const [openPhoto, setOpenPhoto] = useState(false);
  const [like, setLike] = useState(0);

  function handleOpenPhoto() {
      return setOpenPhoto(!openPhoto);
  }

  function handleLike() {
    if (like === 0)
      return setLike(1);
    else if (like === 1)
      return setLike(2);
    else if (like === 2)
      return setLike(0);
}

  return (
    <MyProfileWrapper like={like} photo={openPhoto}>
      <img
        className="profile__user-photo"
        alt="user"
        src="user.png"
        onClick={handleOpenPhoto}
      />
      <span className="profile__user-name">Nioki</span>
      <button className="profile__fav" onClick={handleLike} like={props.like}/>
      <TagList />
    </MyProfileWrapper>
  );
}

export default MyProfile;