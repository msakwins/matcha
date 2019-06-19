import theme from '../theme';
import styled from 'styled-components';

const SignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: ${theme.colors.white};
  height: auto;
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
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 100%;
  }

  .page-exit {
    display: none;
  }

  .page-enter.step1 {
    animation: slideInRight 0.2s forwards;
  }

  .page-enter.step2 {

    ${({ prevPage }) => prevPage === 1 && `
      animation: slideInLeft 0.2s forwards;
    `};
    
    ${({ prevPage }) => prevPage === 3 && `
      animation: slideInRight 0.2s forwards;
    `};
  }

  .page-enter.step3 {
    animation: slideInLeft 0.2s forwards;
  }

  @keyframes slideInLeft {
    0% {
      left: 100%;
    }

    100% {
      left: 0;
    }
  }

  @keyframes slideInRight {
    0% {
      left: -100%;
    }

    100% {
      left: 0;
    }
  }
`;

export default SignUpWrapper;