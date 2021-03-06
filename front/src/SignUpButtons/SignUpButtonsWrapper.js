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
  background: ${theme.colors.white};

  .sign-up-buttons__next {
    width: 100%;
    margin: 0 10px;
  }

  .sign-up-buttons__prev {
    margin: 0;
  }

  .sign-up-buttons__skip {
    margin: 0;
  }
`;

export default SignUpButtonsWrapper;