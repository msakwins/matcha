import styled from 'styled-components';
import theme from '../theme';

const SignUpButtonsWrapper = styled.div`
  width: 100%;
  height: 60px;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-top: 1px solid ${theme.colors.grey};

  .sign-up-buttons__next {
    width: 100%;
    margin: 0 10px;
  }

  .sign-up-buttons__prev {
    width: 40px;
    height: 40px;
    margin: 0;
  }

  .sign-up-buttons__skip {
    height: 40px;
    width: 40px;
    margin: 0;
  }
`;

export default SignUpButtonsWrapper;