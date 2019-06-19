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

    @media all and (min-width: 768px) {
      margin: 60px 0 20px;
    }
  }

  .signin__signup {
    font-family: ${theme.font.primary};
    font-size: 14px;
    margin: 20px 0;
  }
`;

export default SignInWrapper;