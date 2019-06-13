import styled from 'styled-components';
import theme from '../theme';

const FavItemWrapper = styled.div`
  border: 1px solid ${theme.colors.lightestBlue};
  box-shadow: 2px 2px 8px 2px ${theme.colors.grey};
  height: 100px;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 300px;
  padding: 10px;

  :nth-child(odd) {
    margin: 0 10px 0 0;
  }

  .fav-item {
    display: flex;
    flex-direction: column;

    &__info {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      text-align: left;
    }

    &__fav-status {
      .fav-item__fav-status__button {
        height: 30px;
        width: 30px;
        background-size: 20px;
      }
    }
  }
  
  .fav-item__photo {
    height: 80px;
    max-height: 80px;
    width: auto;
    max-width: 80px;
    margin: 0;
  }

`;

export default FavItemWrapper;