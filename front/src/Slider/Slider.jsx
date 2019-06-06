import React, { useState } from 'react';
import SliderWrapper from './SliderWrapper';
import slidesData from './slidesData';

const Slider = ({ handleOpenPhoto }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(2);
  const [slideDir, setSlideDir] = useState("");

  function goPrevSlide(e) {
    e.preventDefault();

    let index = activeSlide;
    let slidesDataLength = slidesData.length;
    
    setPrevSlide(index);
    if (index < 1) {
      index = slidesDataLength;
    }

    --index;
    setActiveSlide(index);
    setSlideDir("slideRight")
  }

  function goNextSlide(e) {
    e.preventDefault();

    let index = activeSlide;
    let slidesDataLength = slidesData.length - 1;

    setPrevSlide(index);
    if (index === slidesDataLength) {
      index = -1;
    }
    ++index;

    setActiveSlide(index);
    setSlideDir("slideLeft")
  }

  return (
    <SliderWrapper id="Slider" activeSlide={activeSlide}>
    <button className="slider__close-button" onClick={handleOpenPhoto}>X</button>
    <div className="slider__content">
      <button className="slider__left-arrow" onClick={(e) => goPrevSlide(e)}>PREV</button>
      <div className={`slider__slides ${slideDir}`}>
        {slidesData.map((slide, index) =>
        <div className={`slider__slide ${prevSlide === index && "-previous"} ${activeSlide === index && "-active"}`} key={index} index={index}>
          <img src={slide.photo} alt="index"></img>
        </div>
        )}
      </div>
      <button className="slider__right-arrow" onClick={(e) => goNextSlide(e)}>NEXT</button>
    </div>
  </SliderWrapper>
  );
};

export default Slider;