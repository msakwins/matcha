import styled from 'styled-components';
// import theme from '../theme';

const M33tWrapper = styled.div`
  min-height: ${({ isLogged }) => isLogged ? `calc(100vh - 60px)` : `100vh` };
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export default M33tWrapper;