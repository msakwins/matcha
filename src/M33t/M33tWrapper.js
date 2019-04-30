import styled from 'styled-components';
// import theme from '../theme';

const M33tWrapper = styled.div`
  height: ${({ isLogged }) => isLogged ? `calc(100vh - 120px)` : `calc(100vh - 60px)`};
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 60px 0 0;
`;

export default M33tWrapper;