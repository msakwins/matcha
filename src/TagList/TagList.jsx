import React, { useState } from 'react';
import TagItem from '../TagItem/TagItem';
import TagListWrapper from'./TagListWrapper';


const TagList = () => {

  const [addInterest, setAddInterest] = useState(false);
  
  function handleNewInterest() {
    if (addInterest === true)
      return(alert('Ajouté'))
    else if (addInterest === false)
      return setAddInterest(!addInterest);
  }
  return (
    <TagListWrapper addInterest={addInterest}>
    <div className="tag-list">
      <TagItem />
      <TagItem />
      <TagItem />
    </div>
    <div className="tag-list__interest-add">
      <input className="tag-list__interest-input" placeholder="scotch, sleeping ..."></input>
      <button className="tag-list__interest-button" onClick={handleNewInterest}></button>
    </div>
  </TagListWrapper>
  )
}

export default TagList;