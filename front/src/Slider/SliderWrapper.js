import styled from 'styled-components';
import theme from '../theme';

const SliderWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  color: white;
  height: 100%;
  width: 100%;
  padding: 10px;
  top: 0;
  position: absolute;
  justify-content: center;
  flex-direction: column;

  .slider__close-button {
    color: ${theme.colors.white};
    position: absolute;
    top: 70px;
    right: 10px;
  }

  .slider__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }


  .slider__slides {
    display: flex;
    flex-direction: row;
    width: 320px;
    overflow: hidden;
    justify-content: flex-start;
  }

  .slider__left-arrow {
    position: absolute;
    color: ${theme.colors.white};
    left: 10px;
  }
  
  .slider__right-arrow {
    position: absolute;
    color: ${theme.colors.white};
    right: 10px;
  }

  .slider__slide {
    display: flex;
    width: 320px;
    min-width: 320px;
    flex-direction: column;
    align-items: center;
    display: none;

    img {
      display: block;
      max-width: 320px;
      margin: auto
    }
  }

  .-active {
    display: block;
  }
`;

export default SliderWrapper;