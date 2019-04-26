import styled from 'styled-components';
import theme from '../theme';

const Input = styled.input`
  width: 180px;
  color: ${theme.colors.black};
  border: none;
  border-bottom: 1px solid ${theme.colors.mediumGrey};
  background: transparent;
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

  ${({ dark }) => dark && `
  color: ${theme.colors.black};
    border-color: ${theme.colors.black};

  `};
`;

export default Input;