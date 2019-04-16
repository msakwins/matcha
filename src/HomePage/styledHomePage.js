import theme from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  color: ${theme.colors.white};
  background: ${theme.colors.darkBlue};
  overflow: auto;
  position: relative;
`;