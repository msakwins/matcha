import styled from 'styled-components';
import theme from '../theme';

const SignUpStepsWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  position: relative;
  white-space: nowrap;
  display: flex;
  flex-direction: row;

  .sign-up__required {
    color: ${theme.colors.mediumGrey};
    font-size: 14px;
    position: absolute;
    bottom: 0;
    margin: 0 0 10px;

    span {
      font-size: 20px;
    }
  }

  .sign-up__first-step {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
    left: 0;
      ${({ page }) => page === 1 && `
      width: 0px;
      left: -100%;
      `};
      
      ${({ page }) => page === 2 && `
      width: 0;
      `};
      
      ${({ page }) => page === 0 && `
      left: 0;
      width: 100%;
      `};
  }

  .sign-up__second-step {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 0px;
    overflow: hidden;
    position: relative;
    left: 100%;
    ${({ page }) => page === 1 && `
      left: 0;
      width: 100%;
    `}

    ${({ page }) => page === 2 && `
      width: 0px;
      left: -100%;
    `}

    .sign-up__photo {
      width: 180px;
      height: 40px;
      min-height: 50px;
      display: flex;
      flex-direction: row;
      
      img {
        border: 1px solid ${theme.colors.grey};
        height: 40px;
        width: 40px;
      }
      
      input {
        width: 75px;
        height: 40px;
        margin: 0 10px;
        border: none;
        padding: 0;
        ::placeholder {
          text-decoration: underline;
        }
      }

      button {
        margin: 0;
      }
    }
    
    .sign-up__genders {
      img {
        height: 30px;
        width: 30px;
      }
    }
  }

  .sign-up__third-step {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 0px;
    overflow: hidden;
    position: relative;
    left: 100%;

    ${({ page }) => page === 2 && `
      left: 0;
      width: 100%;
    `}
    
    .sign-up__photo {
      width: 100px;
      height: 100px;
      border: 1px solid ${theme.colors.grey};
      border-radius: 100%;
    }
  }
`;

export default SignUpStepsWrapper;