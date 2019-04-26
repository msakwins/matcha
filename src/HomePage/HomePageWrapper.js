import styled from 'styled-components';

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
  padding: 10px;

  @media all and (min-width: 768px) {
    margin: 0 0 0 60px;
  }
  
  img {
    height: 50px;
  }
`;

export default HomePageWrapper;