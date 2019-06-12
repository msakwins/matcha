import React from 'react';
import LikeWrapper from './LikeWrapper';

const Like = ({ handleLike, like }) =>
  <LikeWrapper like={like}>
    <span className="particle particle1"></span>
    <span className="particle particle2"></span>
    <span className="particle particle3"></span>
    <span className="particle particle4"></span>
    <span className="particle particle5"></span>
    <span className="particle particle6"></span>
    <span className="particle particle7"></span>
    <span className="particle particle8"></span>
    <button className="profile__fav" onClick={handleLike} like={like}/>
  </LikeWrapper>

export default Like;