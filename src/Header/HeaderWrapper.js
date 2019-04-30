import theme from '../theme.js';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.white};
  font-size: 24px;
  font-weight: 600;
  font-family: ${theme.font.logo};
  position: absolute;
  top: 0;
  border-color: ${theme.colors.grey};
  border-style: solid;
  border-width: 0 0 1px 0;
  max-width: 1024px;
  box-sizing: border-box;

  @media all and (min-width: 768px) {
    border: none;
  }

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.grey};
    text-shadow: 2px 2px ${theme.colors.black};

    :visited {
      color: ${theme.colors.grey};
    }
  }
`;

export default HeaderWrapper;