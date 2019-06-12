import React from 'react';
import FavItem from '../FavItem/FavItem';
import MatchesWrapper from './MatchesWrapper';
import { Title, CategoryContainer } from '../Styled';

const Matches = ({ user, like }) =>
<MatchesWrapper id="Matches">
  <FavItem user={user} like={like} />
  <FavItem />
</MatchesWrapper>

export default Matches;