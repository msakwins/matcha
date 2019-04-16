import theme from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.darkBlue};
  color: white;
  font-size: 24px;
  font-weight: 600;

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`;