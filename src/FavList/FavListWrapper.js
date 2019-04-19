import styled from 'styled-components';
import { theme } from '../theme';

const FavListWrapper = styled.div`
  margin: 60px auto;
  padding: 10px;
  height: 100%;

  .fav-list__logo {
    font-family: ${theme.font.logo};
    letter-spacing: -1px;
    text-shadow: 2px 2px ${theme.colors.lightBlue};

  }

  img {
    margin: 30px 0 0;
    height: 30px;
  }
`;

export default FavListWrapper;