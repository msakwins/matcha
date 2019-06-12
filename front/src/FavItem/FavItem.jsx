import React from 'react';
import FavItemWrapper from './FavItemWrapper';
import user from '../User';
import Like from '../Styled/Like';
import { LinkMessages } from '../Styled';

const FavItem = ({ like }) =>
<FavItemWrapper small="small" like={like}>
  <img src="/user.png" alt="user" className="fav-item__photo" />
  <div className="fav-item">
    <div className="fav-item__info">
      <span>{user.firstName}</span>
      <span>{user.age}</span>
      <span>{user.city}</span>
    </div>
    <div className="fav-item__fav-status">
      <Like className="fav-item__fav-status__button" like={like} />
      <LinkMessages small="small" to="/messages" />
    </div>
  </div>
</FavItemWrapper>

export default FavItem;