import theme from '../theme.js';
import styled from 'styled-components';


const TagListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  .tag-list__interest-add {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 30px;
    width: 150px;

    .tag-list__interest-button {
      height: 30px;
      width: 30px;
      background: ${theme.colors.violet};
      color: ${theme.colors.white};
      border: none;
      border-radius: 6px;
      position: absolute;
      left: 0px;
      transition: all 0.2s;
      ${({ addInterest }) => addInterest && `
        left: 120px;
        border-radius: 0 6px 6px 0;
      `};
      background-image: url('/plus.svg');
      background-size: 12px;
      background-repeat: no-repeat;
      background-position: center;
    }

    .tag-list__interest-input {
      -webkit-appearance: none;
      height: 30px;
      width: 30px;
      border: 1px solid ${theme.colors.violet};
      border-radius: 6px;
      position: absolute;
      left: 0;
      transition: all 0.2s;
      padding: 0 10px;
      ${({ addInterest }) => addInterest && `
        width: 120px;
        border-radius: 6px 0 0 6px;
      `};
    }
  }
`;

export default TagListWrapper;