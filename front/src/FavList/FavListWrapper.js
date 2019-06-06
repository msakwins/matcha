import styled from 'styled-components';
// import theme from '../theme';

const FavListWrapper = styled.div`
  margin: 0;
  padding: 10px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  img {
    margin: 30px 10px 0;
    height: 30px;
  }

  .fav-list {
    display: flex;
    justify-content: flex-start;
  }
`;

export default FavListWrapper;