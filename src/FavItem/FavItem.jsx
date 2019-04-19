import React from 'react';
import FavItemWrapper from './FavItemWrapper';

const FavItem = () =>
<FavItemWrapper>
  <img src="/user.png" alt="user" className="fav-item__photo" />
  <div className="fav-item__info">
    <span>Nioki</span>
    <span>24</span>
    <span>Paris</span>
  </div>
  <div className="fav-item__buttons">
  </div>
</FavItemWrapper>

export default FavItem;