import theme from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  background: white;
  color: ${theme.colors.white};
  background: ${theme.colors.darkBlue};
  overflow: auto;
  position: relative;
  height: 90vh;

  .homepage-bubble {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background: ${theme.colors.white};
    position: relative;
    top: 100px;
    
  }
`;