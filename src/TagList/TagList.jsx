import React, { useState } from 'react';
import TagItem from '../TagItem/TagItem';
import TagListWrapper from'./TagListWrapper';
import { withRouter } from 'react-router-dom';


const TagList = (props) => {

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
    { props.path === "/my-profile" &&
      <div className="tag-list__interest-add">
        <input className="tag-list__interest-input" placeholder="scotch, sleeping ..."></input>
        <button className="tag-list__interest-button" onClick={handleNewInterest}></button>
    </div>
    }
  </TagListWrapper>
  )
}

export default withRouter(TagList);