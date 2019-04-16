import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../theme';

const Button = styled.button`
  box-sizing: border-box;
  position: relative;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: ${theme.font.primary};
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

const buttonLink = styled(Link)`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-family: ${theme.font.primary};
  text-transform: uppercase;
  text-decoration: none;

  
  :hover {
    box-shadow: inset 200px 0 0 0 ${theme.colors.lightBlue};
    color: ${theme.colors.mediumBlue};
    border-color: ${theme.colors.lightBlue};
  }
`;

export { Button, buttonLink };