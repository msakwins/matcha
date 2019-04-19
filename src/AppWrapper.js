import styled from 'styled-components';
import { theme } from './theme';

const AppWrapper = styled.div`
  text-align: center;
  font-family: ${theme.font.primary};
  cursor: default;
  overflow: scroll;

  .App-header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
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

  .App-link {
    color: #61dafb;
  }

`;

export default AppWrapper;