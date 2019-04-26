import React from 'react';
import FavItem from '../FavItem/FavItem';
import FavListWrapper from './FavListWrapper';

const FavList = () =>
<FavListWrapper>
  <span className="fav-list__logo">M33t's</span>
  <FavItem />
  <img alt="none" src="/heart.svg"></img>
  <img alt="like" src="/heart-like.svg"></img>
  <img alt="love" src="/heart-love.svg"></img>
</FavListWrapper>

export default FavList;