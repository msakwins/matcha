import React from 'react';
import FavItem from '../FavItem/FavItem';
import FavListWrapper from './FavListWrapper';
import { Title, CategoryContainer } from '../Styled';

const FavList = ({ user, like }) =>
<FavListWrapper id="FavList">
  <Title>Matches</Title>
  <CategoryContainer className="fav-list">
    <FavItem user={user} like={like} />
    <FavItem />
  </CategoryContainer>
  <img alt="none" src="/heart.svg"></img>
  <img alt="like" src="/heart-like.svg"></img>
  <img alt="love" src="/heart-love.svg"></img>
</FavListWrapper>

export default FavList;