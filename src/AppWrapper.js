import styled from 'styled-components';
import theme from './theme';

const AppWrapper = styled.div`
  text-align: center;
  font-family: ${theme.font.primary};
  cursor: default;
  height: 100vh;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  background-color: ${theme.colors.white};

  input {
    font-size: 16px;
    ::placeholder {
      font-size: 14px;
    }
  }
  
  a {
    color: #4c4c4c;
  }


  .change-theme {
    height: 50px;
    width: 50px;
    position: relative;
    bottom: 0;
    background: red;
  }

`;

export default AppWrapper;