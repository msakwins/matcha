import styled from 'styled-components';
import theme from './theme';

const AppWrapper = styled.div`
  text-align: center;
  font-family: ${theme.font.primary};
  cursor: default;

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