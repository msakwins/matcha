import { theme } from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  height: 90px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${theme.colors.darkBlue};
  color: white;
  font-family: ${theme.font.primary};
  position: absolute;
  bottom: 0;
`;