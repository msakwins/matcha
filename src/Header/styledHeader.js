import theme from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.darkBlue};
  color: white;
  font-size: 24px;
  font-weight: 600;
  font-family: ${theme.font.secondary};

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.white};
  }
`;