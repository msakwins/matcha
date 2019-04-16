import theme from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  width: 100%;
  max-width: 1024px;
  padding: 0 20px;
  margin: auto;
  color: ${theme.colors.white};
  background: ${theme.colors.darkBlue};
  overflow: auto;
  position: relative;

  img {
    height: 50px;
  }
`;