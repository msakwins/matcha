import styled from 'styled-components';
import theme from '../theme';

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.colors.border};
  background: transparent;
  opacity: 0.8;
  height: 35px;
  width: 180px;
  outline: none;
  padding: 0 10px;
  border-radius: 0;
  margin: 20px 0 20px;
  color: ${theme.colors.white};
  font-size: 14px;
  font-family: ${theme.font.primary};

  :focus {
    ::placeholder {
      opacity: 0;
    }
  }

  ::placeholder {
    font-family: ${theme.font.primary};
    color: ${theme.colors.white};
    font-size: 14px;
    opacity: 0.6;
  }
`;

export default Input;