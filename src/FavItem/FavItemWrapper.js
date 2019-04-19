import styled from 'styled-components';
import { theme } from '../theme';

const FavItemWrapper = styled.div`
  margin: 10px 0 0;
  padding: 10px;
  border: 1px solid ${theme.colors.lightestBlue};
  box-shadow: 2px 2px 8px 2px ${theme.colors.grey};
  height: 70px;
  display: flex;
  flex-direction: row;

  .fav-item__photo {
    height: 50px;
    width: auto;
    margin: 0 20px 0 0;
  }

  .fav-item__info {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    text-align: left;
  }
`;

export default FavItemWrapper;