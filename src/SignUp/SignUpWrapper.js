import theme from '../theme.js';
import styled from 'styled-components';

const SignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: ${theme.colors.white};
  color: ${theme.colors.darkBlue};
  height: 100%;
  width: 100%;
  position: relative;
  flex-wrap: nowrap;
  white-space: nowrap;
  padding: 10px;

  .sign-up__fields {
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 230px);
    overflow-x: auto;
    align-items: center;
  }

  .sign-up__buttons {
    position: absolute;
    bottom: 0;
  }

  .sign-up__first-step {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
    left: 0;
    ${({ page }) => page === 1 && `
      transition: width 0.2s;
      width: 0;
    `};

    ${({ page }) => page === 2 && `
      transition: width 0.2s;
      width: 0;
    `};

    ${({ page }) => page === 0 && `
      transition: width 0.2s;
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
      transition: left 0.3s, width 0.2s;
      left: 0;
      width: 100%;
    `}

    ${({ page }) => page === 2 && `
      transition: left 0.3s, width 0.2s;
      left: 0;
      width: 0;
    `}

    .sign-up__photo {
      width: 100px;
      height: 100px;
      min-height: 100px;
      min-width: 100px;
      border: 1px solid ${theme.colors.grey};
      border-radius: 100%;
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
      transition: left 0.3s, width 0.2s;
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