import React from 'react';
import LikeWrapper from './LikeWrapper';
import Liked from '../Liked/Liked';

const Like = ({ handleLike, like, liked }) =>
  <LikeWrapper id="Like" like={like} liked={liked}>
    <span className="particle particle1"></span>
    <span className="particle particle2"></span>
    <span className="particle particle3"></span>
    <span className="particle particle4"></span>
    <span className="particle particle5"></span>
    <span className="particle particle6"></span>
    <span className="particle particle7"></span>
    <span className="particle particle8"></span>
    <Liked />
    <button className="profile__like" onClick={handleLike} />

  </LikeWrapper>

export default Like;