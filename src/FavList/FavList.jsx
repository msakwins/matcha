import React from 'react';
import FavItem from '../FavItem/FavItem';
import FavListWrapper from './FavListWrapper';

const FavList = () =>
<FavListWrapper>
  <span className="fav-list__logo">M33ts</span>
  <FavItem />
  <img alt="none" src="/heart-none.svg"></img>
  <img alt="like" src="/heart-like.svg"></img>
  <img alt="both-like" src="/heart-both-like.svg"></img>
  <img alt="love" src="/heart-love.svg"></img>
  <img alt="both-love" src="/heart-both-love.svg"></img>
</FavListWrapper>

export default FavList;