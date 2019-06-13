import theme from '../theme';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.mediumGrey};
  justify-content: center;
  align-items: center;
  max-width: 1024px;

  span {
    display: none;
  }

  @media all and (min-width: 768px) {
    top: 0;
    left: 0;
    height: 100%;
    width: 60px;
    padding: 0;
    border: none;
    position: absolute;
    flex-direction: column-reverse;
    justify-content: flex-end;
    box-shadow: 0 0 8px 0px ${theme.colors.grey};
    overflow: hidden;
    
    ${({ menuclass }) => menuclass === "-close" && `
      transition: width 0.4s;
      width: 60px;
    `}
    
    ${({ menuclass }) => menuclass === "-open" && `
      transition: width 0.4s;
      width: 200px;
    `}

    span {
      position: absolute;
      overflow: hidden;
      white-space: nowrap;
      left: 50px;
      display: block;
      height: 60px;
      width: 140px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 10px 10px 20px;
    }
  } 

  .menu__close-button {
    border-bottom: 1px solid ${theme.colors.grey};
    padding: 10px;
    width: 60px;
    height: 50px;
    display: none;

    @media all and (min-width: 768px) {
      display: block;
      
      ${({ menuclass }) => menuclass === "-close" && `
        transition: width 0.4s;
        width: 60px;
      `}
      
      ${({ menuclass }) => menuclass === "-open" && `
        transition: width 0.4s;
        width: 200px;
      `}
    }
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