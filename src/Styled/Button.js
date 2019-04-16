import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  position: relative;
  display: block;
  cursor: pointer;
  border: none;
  background: ${theme.colors.darkBlue};
  border: 1px solid ${theme.colors.white};
  height: 40px;
  width: 200px;
  outline: none;
  padding: 0 10px;
  margin: 20px 0 20px;
  font-size: 14px;
  color: ${theme.colors.white};
  transition: all 0.4s ease-out;
  box-shadow: inset 0 0 0 0 ${theme.colors.lightBlue};
  text-transform: uppercase;

  
  :hover {
    box-shadow: inset 200px 0 0 0 ${theme.colors.lightBlue};
    color: ${theme.colors.mediumBlue};
    border-color: ${theme.colors.lightBlue};
  }
`;

export default Button;