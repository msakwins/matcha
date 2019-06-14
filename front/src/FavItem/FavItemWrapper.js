import styled from 'styled-components';
import theme from '../theme';

const FavItemWrapper = styled.div`
  border-bottom: 1px solid ${theme.colors.lightGrey};
  height: 100px;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 300px;
  padding: 10px;

  .fav-item {
    flex-direction: row;
    text-align: left;
    display: flex;
    margin: 0 5px;

    &__info {
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }

    &__fav-status {
      display: flex;

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