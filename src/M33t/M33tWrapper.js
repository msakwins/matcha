import styled from 'styled-components';

const M33tWrapper = styled.div`
  height: ${({ isLogged }) => isLogged ? `calc(100vh - 120px)` : `calc(100vh - 60px)`};
  width: 100%;
  margin: 60px auto 0;
  display: flex;

`;

export default M33tWrapper;