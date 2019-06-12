import styled from 'styled-components';
import theme from '../theme';

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${theme.colors.grey};
  text-shadow: 2px 2px ${theme.colors.black};
  font-family: ${theme.font.logo};
  font-size: 30px;
  font-weight: 600;


  :visited {
    color: ${theme.colors.grey};
  }
`;

export default LogoWrapper;