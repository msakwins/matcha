import styled from 'styled-components';
import theme from '../theme';

const Input = styled.input`
  width: 180px;
  border: none;
  background: transparent;
  color: ${theme.colors.black};
  border-bottom: 1px solid ${theme.colors.black};
  height: 35px;
  min-height: 35px;
  outline: none;
  padding: 0 10px;
  border-radius: 0;
  margin: 10px 0 10px;
  font-family: ${theme.font.primary};

  :focus {
    ::placeholder {
      opacity: 0;
    }
  }

  ::placeholder {
    font-family: ${theme.font.primary};
    color: ${theme.colors.mediumGrey};
    font-size: 16px;
  }
`;

export default Input;