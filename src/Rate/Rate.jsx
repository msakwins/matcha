import React from 'react';
import RateWrapper from './RateWrapper';

const Rate = ({ handleRate, rate }) =>
  <RateWrapper id="Rate" rate={rate}>
    <div className="rate__nice">
      <div onClick={() => handleRate(1)} className="one-star star"></div>
      <div onClick={() => handleRate(2)} className="two-star star"></div>
      <div onClick={() => handleRate(3)} className="three-star star"></div>
      <div onClick={() => handleRate(4)} className="four-star star"></div>
      <div onClick={() => handleRate(5)} className="five-star star"></div>
    </div>
  </RateWrapper>

export default Rate;