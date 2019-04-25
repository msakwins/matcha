import theme from '../theme.js';
import styled from 'styled-components';


const SignInWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 40px 10px;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.darkBlue};

  h1 {
    color: ${theme.colors.white};
  }

  .sign-in__forgot-password {
    font-family: ${theme.font.primary};
    font-size: 14px;
    margin: 0 0 30px;
    color: ${theme.colors.white};
    text-decoration: underline;
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

export default SignInWrapper;