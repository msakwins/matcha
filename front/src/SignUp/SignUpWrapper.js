import theme from '../theme';
import styled from 'styled-components';

const SignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: ${theme.colors.white};
  height: 100%;
  width: 100%;
  position: relative;
  white-space: nowrap;
  margin: 0 0 60px 0;

  .sign-up__filled {
    width: 180px;
    text-align: left;
    margin: 20px 0 0;
  }

  .sign-up__fields {
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 150px);
    overflow-x: auto;
    align-items: center;
    padding: 10px;
    width: 100%;
  }
`;

export default SignUpWrapper;