import theme from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  height: 60px;
  width: 100%;
  color: ${theme.colors.white};
  background: ${theme.colors.darkBlue};
  overflow: auto;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid ${theme.colors.lightBlue};

  a {
    height: 35px;
    width: 35px;
    background-image: url('/chat.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }
`;