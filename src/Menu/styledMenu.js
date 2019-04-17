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
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-top: 1px solid ${theme.colors.lightBlue};

  .menu__link-messages {
    background-image: url('/chat.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 35px;
    width: 35px;
  }

  .menu__link-back {
    background-image: url('/left-arrow.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 30px;
    width: 30px;
  }

  .menu__link-settings {
    background-image: url('/settings.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 35px;
    width: 35px;
  }

  .menu__link-fav {
    background-image: url('/heart-love.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 35px;
    width: 35px;
  }
`;