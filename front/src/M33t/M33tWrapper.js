import styled from 'styled-components';
// import theme from '../../theme';

const M33tWrapper = styled.div`
  min-height: ${({ isLogged }) => isLogged ? `calc(100vh - 120px)` : `calc(100vh - 60px)`};
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 60px 0 0;
  position: relative;
`;

export default M33tWrapper;