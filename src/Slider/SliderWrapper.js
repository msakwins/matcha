import styled from 'styled-components';
import theme from '../theme';

const SliderWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  color: white;
  height: 100%;
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  position: relative;

  button {
    color: white;
  }

  .slider__slide {
    display: flex;
    flex-direction: column;
    display: none;

    img {
      width: 100%;
      height: auto;
    }
  }

  .-active {
    display: block;
  }

  .slider__left-arrow {
    position: absolute;
    left: 10px;
  }

  .slider__right-arrow {
    position: absolute;
    right: 10px;
  }
`;

export default SliderWrapper;