import theme from '../theme.js';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  height: 60px;
  position: relative;
  width: 100%;
  color: ${theme.colors.white};
  background: ${theme.colors.lightBlue};
  overflow: auto;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 20px;
  border-top: 1px solid ${theme.colors.lightBlue};
  transition: height 0.1s;
  overflow: hidden;
  
  ${({ subMenu }) => subMenu && `
    height: 120px;
    `}

  .menu__main-menu {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    min-height: 60px;
  }

  .menu__sub-menu {
    height: 60px;
    min-height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .menu__link-messages {
    background-image: url('/chat.svg');
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
    height: 30px;
    width: 30px;
  }

  .menu__link-fav {
    background-image: url('/heart-love.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 30px;
    width: 30px;
  }

  .menu__link-profile {
    background-image: url('/user.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    border-radius: 100%;
    height: 30px;
    width: 30px;
  }

  .menu__button-sub-menu {
    background: none;
    border: none;
    background-image: url('/more.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 24px;
    width: 24px;
  }
`;

export default MenuWrapper;