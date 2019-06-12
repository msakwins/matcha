import React from 'react';
import RateWrapper from './RateWrapper';

const Rate = ({ handlePopularity, popularityNice, popularitySmart, user }) =>
  <RateWrapper id="Rate" nice={popularityNice} smart={popularitySmart}>
    <div>
     Was {user.firstName} nice?
    </div>
    <div className="rate__nice">
      <div onClick={() => handlePopularity("nice", 1)} className="one-star star"></div>
      <div onClick={() => handlePopularity("nice", 2)} className="two-star star"></div>
      <div onClick={() => handlePopularity("nice", 3)} className="three-star star"></div>
      <div onClick={() => handlePopularity("nice", 4)} className="four-star star"></div>
      <div onClick={() => handlePopularity("nice", 5)} className="five-star star"></div>
    </div>
    <div>
     Was {user.firstName} smart?
    </div>
    <div className="rate__smart">
      <div onClick={() => handlePopularity("smart", 1)} className="one-star star"></div>
      <div onClick={() => handlePopularity("smart", 2)} className="two-star star"></div>
      <div onClick={() => handlePopularity("smart", 3)} className="three-star star"></div>
      <div onClick={() => handlePopularity("smart", 4)} className="four-star star"></div>
      <div onClick={() => handlePopularity("smart", 5)} className="five-star star"></div>
    </div>
  </RateWrapper>

export default Rate;