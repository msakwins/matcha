import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const MenuItemWrapper = styled(Link)`
  display: flex;
  background-position: center;
  border-radius: 100%;
  height: ${({ bg }) => bg === '/user.png' ? '30px' : '40px'};
  width: ${({ bg }) => bg === '/user.png' ? '30px' : '40px'};
  position: relative;
  background-image: url(${({ bg, selected, path, url }) => (bg && selected && path === url) ? `${selected}` : bg});
  background-size: 30px;
  background-repeat: no-repeat;

  .menu-item__logo {
    height: 40px;
    display: flex;
    align-items: center;
    font-family: ${theme.font.logo};
    color: ${theme.colors.darkBlue};
    text-shadow: 2px 2px ${theme.colors.lightBlue};
    margin: 0 0 4px;

    :visited {
      color: ${theme.colors.darkBlue};
    }
  }
`;

export default MenuItemWrapper;