import React, { useState } from 'react';
import SliderWrapper from './SliderWrapper';
import slidesData from './slidesData';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  function goSlide(index) {
    setActiveSlide(index)
  }

  function goPrevSlide(e) {
    e.preventDefault();

    let index = activeSlide;
    let slidesDataLength = slidesData.length;

    if (index < 1) {
      index = slidesDataLength;
    }

    --index;

    setActiveSlide(index);
  }

  function goNextSlide(e) {
    e.preventDefault();

    let index = activeSlide;
    let slidesDataLength = slidesData.length - 1;

    if (index === slidesDataLength) {
      index = -1;
    }

    ++index;

    setActiveSlide(index);
  }

  return (
  <SliderWrapper activeSlide={activeSlide}>
    <button className="slider__left-arrow" onClick={(e) => goPrevSlide(e)}>PREV</button>
      {console.log(activeSlide)}
    <div>
      {slidesData.map((slide, index) =>
      <div className={`slider__slide ${activeSlide === index && "-active"}`} key={index} index={index}>
        <img src={slide.photo} alt="index"></img>
      </div>
      )}
    </div>
    <button className="slider__right-arrow" onClick={(e) => goNextSlide(e)}>NEXT</button>
  </SliderWrapper>
  );
};

export default Slider;