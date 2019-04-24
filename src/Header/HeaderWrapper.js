import theme from '../theme.js';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.bgSecondary};
  font-size: 24px;
  font-weight: 600;
  font-family: ${theme.font.logo};
  position: absolute;
  top: 0;

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.fontSecondary};
    text-shadow: 2px 2px ${props => props.theme.fontTertiary};
  }
`;

export default HeaderWrapper;