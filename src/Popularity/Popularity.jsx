import React from 'react';
import PopularityWrapper from './PopularityWrapper';

function findPopularityName(popularity) {
  var keys = Object.keys(popularity);
  var max = keys[0];
  for (var i = 1, n = keys.length; i < n; ++i) {
     var k = keys[i];
     if (popularity[k] > popularity[max]) {
        max = k;
     }
  }
  return max;
}

function Popularity ({ popularity }) {
  const highestPopularityNumber = Math.max(popularity.nice, popularity.smart, popularity.fun, popularity.pretty)
  const highestPopularityName = findPopularityName(popularity)

  return (
    <PopularityWrapper id="popularity" popularity={highestPopularityName}>
      <span>{highestPopularityNumber}</span>
    </PopularityWrapper>
    )
}

export default Popularity;