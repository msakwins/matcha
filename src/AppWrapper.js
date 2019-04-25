import styled from 'styled-components';
import theme from './theme';

const AppWrapper = styled.div`
  text-align: center;
  font-family: ${theme.font.primary};
  cursor: default;

  input {

    ::placeholder {
      font-size: 14px;
    }
  }
  
  .change-theme {
    height: 50px;
    width: 50px;
    position: relative;
    bottom: 0;
    background: red;
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