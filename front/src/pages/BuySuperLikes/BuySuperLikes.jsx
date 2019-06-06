import React from 'react';
import BuySuperLikesWrapper from './BuySuperLikesWrapper';
import { Title, CategoryHeader, CategoryContainer } from '../../Styled';

const BuySuperLikes = () =>
  <BuySuperLikesWrapper id="BuySuperLikes">
    <CategoryHeader>
      SUPERLIKES
    </CategoryHeader>
    <CategoryContainer>
    <p>
      Better than regular likes, super-likes allow you to send a message directly to the Super-likedg.
      If you super-liked each other, you will unlock special interactions.
    </p>
    <p>
      If she / he doesn't like / super-like you back in the next 42 hours;
      you can ask to get your Super-like back, or continue to wait.
    </p>
    <span className="buy-super-likes__little">
      The Super-like can be taken back at any time after the 42 hours, just check your profile.
    </span>
    </CategoryContainer>
  </BuySuperLikesWrapper>

export default BuySuperLikes;