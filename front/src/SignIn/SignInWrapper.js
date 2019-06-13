import theme from '../theme';
import styled from 'styled-components';


const SignInWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  h1 {
    margin: 20px 0;
  }

  .sign-in__forgot-password {
    font-family: ${theme.font.primary};
    font-size: 14px;
    margin: 0 0 40px;
    text-decoration: underline;
    color: ${theme.colors.lightBlue};
  }

  .signin__signup {
    font-family: ${theme.font.primary};
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