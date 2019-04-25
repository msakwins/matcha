import theme from '../theme.js';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.lightBlue};
  justify-content: center;
  align-items: center;

  @media all and (min-width: 768px) {
    top: 60px;
    height: 100%;
    width: 60px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 0;
    position: fixed;
    border: none;
    border-right: 2px solid ${theme.colors.grey};
  } 

  .menu__search-input {
    width: 0px;

    ${({ search }) => search && `
    `
    };
  }

  .search-open {
    display: block;
    position: absolute;
    top: 0;
  }

  .notification {
    :after {
      content: ${({ notif }) => notif ? notif : '4'};
      position: absolute;
      left: 22px;
      width: 14px;
      height: 14px;
      display: block;
      background: ${theme.colors.pink};
      border-radius: 100%;
    }
  }

`;

export default MenuWrapper;