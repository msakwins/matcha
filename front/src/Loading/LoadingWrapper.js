import styled from 'styled-components';
import theme from '../theme';

const LoadingWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.04);

  .loading__heart {
    height: 60px;
    width: 60px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${theme.colors.white};
    border-radius: 100%;
    background-image: url('heart-love.svg');
    display: block;
    animation: heart 4s infinite;
    padding: 0;
    background-size: 30px;
    position: relative;
    top: 30%;
  }

  @keyframes heart {
    0% {
      background-image: url('heart-love.svg');
      background-size: 10px;
    }

    15% {
      background-image: url('heart-like.svg');
    }

    25% {
      background-size: 30px;
    }

    45% {
      background-image: url('heart-like.svg');
    }

    50% {
      background-size: 10px;
    }

    65% {
      background-image: url('heart-love.svg');
    }

    75% {
      background-size: 30px;
    }

    95% {
      background-image: url('heart-love.svg');
    }

    100% {
      background-size: 10px;
    }
  }
`;

export default LoadingWrapper;