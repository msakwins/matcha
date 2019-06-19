import styled from 'styled-components';
import theme from '../theme';



const SignUpStepsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  
  .sign-up__required {
    color: ${theme.colors.mediumGrey};
    font-size: 14px;
    position: absolute;
    bottom: 0;
    margin: 0 auto 10px;
    width: 100%;

    span {
      font-size: 20px;
    }
  }

  .sign-up__photo {
    width: 100px;
    height: 100%;
    border: 1px solid ${theme.colors.grey};
    border-radius: 100%;
  }
`;

const SignUpStep2Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .sign-up__user-photo {
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
    margin: 20px 0;
    
    img {
      height: 40px;
      width: 40px;
      margin: 10px;
      padding: 8px;
      background-color: ${theme.colors.lightGrey};
    }
  }

`;

export { SignUpStepsWrapper, SignUpStep2Wrapper };