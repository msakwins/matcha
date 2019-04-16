import theme from '../theme.js';
import styled from 'styled-components';


export default (Component) => styled(Component)`
  padding: 10px;
  width: 100%;
  padding: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  background: ${theme.colors.darkBlue};

  h1 {
    font-size: 18px;
  }

  .signin__forgot-password {
    font-family: ${theme.font.primary};
    font-size: 14px;
    color: ${theme.colors.white};
  }

  .signin__signup {
    font-family: ${theme.font.primary};
    color: ${theme.colors.white};
    font-size: 14px;
    margin: 20px 0;
  }

  .homepage__link {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    font-size: 14px;
    font-family: ${theme.font.primary};
    margin: 10px 0 0;
  }
`;