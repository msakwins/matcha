import styled from 'styled-components';

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 20px;
  margin: 60px auto;
  color: ${props => props.theme.fontPrimary};
  background: ${props => props.theme.bgPrimary};
  padding: 10px;

  img {
    height: 50px;
  }
`;

export default HomePageWrapper;