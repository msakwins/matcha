import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../theme';

const MenuItemWrapper = styled(Link)`
  display: flex;
  background-position: center;
  align-items: center;
  border-radius: 100%;
  height: ${({ bg }) => bg === '/user.png' ? '30px' : '40px'};
  width: ${({ bg }) => bg === '/user.png' ? '30px' : '40px'};
  position: relative;
  background-image: url(${({ bg, selected, path, url }) => (bg && selected && path === url) ? `${selected}` : bg});
  background-size: 30px;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  justify-content: center;
  margin: 0 8px;

  ${({ path }) => path === '/' && `
    width: 70px;
  `}

${({ path }) => path === '/favs' && `
    background-size: 28px;
  `}

  .menu-item__logo {
    display: flex;
    align-items: center;
    font-family: ${theme.font.logo};
    text-shadow: 2px 2px ${theme.colors.lightBlue};
    margin: 0 5px 4px;
  }


  .menu-item__profile {
    display: flex;
    align-items: center;
    height: 34px;
    width: 34px;
    background-size: 34px;
    background-repeat: no-repeat;
    border-radius: 100%;
    background-image: url(${({ bg, selected, path, url }) => (bg && selected && path === url) ? `${selected}` : bg});
    background-image: url('/user.png');
  }
`;

export default MenuItemWrapper;