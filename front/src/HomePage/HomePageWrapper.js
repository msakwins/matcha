import styled from 'styled-components';
import theme from '../theme';

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
  padding: 10px;
  color: ${theme.colors.darkGrey};
  img {
    height: 50px;
  }
`;

export default HomePageWrapper;