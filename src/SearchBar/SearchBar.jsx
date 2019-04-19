import React from 'react';
import SearchBarWrapper from './SearchBarWrapper';

function SearchBar(props) {

  return (
    <SearchBarWrapper openbar={props.openSearch === true}
      nonebar={props.openSearch === null}
      closebar={props.openSearch === false}
    >
    <input placeholder="Search here.."></input>
  </SearchBarWrapper>
    )
}

export default SearchBar