import React from 'react';
import TagItem from '../TagItem/TagItem';
import TagListWrapper from'./TagListWrapper';


const TagList = () =>
  <TagListWrapper>
    <TagItem />
    <TagItem />
    <TagItem />
    <span>Ajouter des intérêts</span>
  </TagListWrapper>

export default TagList;