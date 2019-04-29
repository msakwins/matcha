import React from 'react';
import FavItem from '../FavItem/FavItem';
import FavListWrapper from './FavListWrapper';
import { Title } from '../Styled';

const FavList = () =>
<FavListWrapper>
  <Title>Matches</Title>
  <FavItem />
  <img alt="none" src="/heart.svg"></img>
  <img alt="like" src="/heart-like.svg"></img>
  <img alt="love" src="/heart-love.svg"></img>
</FavListWrapper>

export default FavList;