import { theme } from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  width: fit-content;
  max-width: 70%;
  height: auto;
  padding: 10px 20px;
  background: ${theme.colors.lightestBlue};
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  font-size: 14px;
  letter-spacing: 0.03rem;
  font-weight: bold;
  text-align: left;
  color: ${theme.colors.darkBlue};
  margin: 10px 0 0;

  ${({ mine }) => mine && `
    background: ${theme.colors.lighterBlue};
    postion: relative;
    display: flex;
    align-self: flex-end;
  `}
`;