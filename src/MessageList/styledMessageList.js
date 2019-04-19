import { theme } from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  width: 100%;
  background: ${theme.colors.white};
  display: flex;
  margin: 10px 0;
  flex-direction: column;
  max-height: 130px;
  overflow: scroll;

  ${({ extended }) => extended && `
    max-height: unset;
  `}

`;