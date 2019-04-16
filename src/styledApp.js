import styled from 'styled-components';
import theme from './theme';

export default (Component) => styled(Component)`
  height: 100%;
  text-align: center;
  font-family: ${theme.font.primary};
  color: #333;
  cursor: default;
  background: ${theme.colors.darkBlue};

.App-logo {
}

.App-header {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

`;