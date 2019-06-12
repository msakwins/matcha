import theme from '../theme.js';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.lightGrey};
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  top: 0;
  max-width: 1024px;
  box-sizing: border-box;
  padding: 10px;

  @media all and (min-width: 768px) {
    position: fixed;
  }

  img {
    max-height: 35px;
    max-width: 35px;
    border-radius: 100%;
    position: absolute;
    right: 10px;
  }
`;

export default HeaderWrapper;