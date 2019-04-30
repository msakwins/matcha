import theme from '../theme.js';
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
  padding: 10px;

  .sign-up__steps {
    width: 100%;
    height: 100%;
    position: relative;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
  }

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

  .sign-up__buttons {
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: row;
    justify-content: center;

    .sign-up__button-next {
      border-color: ${theme.colors.lightBlue};
      color: ${theme.colors.lightBlue};
    }

    .sign-up__button-skip {
      border-color: ${theme.colors.mediumGrey};
      color: ${theme.colors.mediumGrey};
    }

    .sign-up__button-back {
      border-color: ${theme.colors.mediumGrey};
      color: ${theme.colors.mediumGrey};
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
      transition: width 0.5s, left 0.5s;
      width: 0px;
      left: -100%;
    `};

    ${({ page }) => page === 2 && `
      transition: width 0.2s;
      width: 0;
    `};

    ${({ page }) => page === 0 && `
      transition: left 0.5s, width 0.2s;
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
      transition: left 0.5s, width 0.2s;
      left: 0;
      width: 100%;
    `}

    ${({ page }) => page === 2 && `
      transition: width 0.5s, left 0.5s;
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
      transition: left 0.5s, width 0.2s;
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

export default SignUpWrapper;