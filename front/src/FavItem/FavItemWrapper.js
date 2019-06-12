import styled from 'styled-components';
import theme from '../theme';

const FavItemWrapper = styled.div`
  border: 1px solid ${theme.colors.lightestBlue};
  box-shadow: 2px 2px 8px 2px ${theme.colors.grey};
  height: 250px;
  display: flex;
  flex-direction: column;
  max-width: 50%;
  padding: 10px;

  :nth-child(odd) {
    margin: 0 10px 0 0;
  }

  .fav-item {
    display: flex;
    flex-direction: row;
    padding: 10px;

    &__info {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      margin: 10px 0 0;
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
    height: auto;
    width: 100%;
    margin: 0;
  }

`;

export default FavItemWrapper;