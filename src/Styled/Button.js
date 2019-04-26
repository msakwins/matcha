import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../theme';

const Button = styled.button`
  position: relative;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: ${theme.font.primary};
  border: 1px solid ${theme.colors.lightBlue};
  background: ${theme.colors.lightBlue};
  height: 40px;
  width: 180px;
  outline: none;
  padding: 0 10px;
  margin: 10px 5px;
  font-size: 14px;
  color: ${theme.colors.white};
  transition: all 0.4s ease-out;
  box-shadow: inset 0 0 0 0 ${theme.colors.lightBlue};
  text-transform: uppercase;

  ${({ hover }) => hover && `
    :hover {
      @media all and (min-width: 768px) {
        box-shadow: inset 200px 0 0 0 ${theme.colors.lightBlue};
        color: ${theme.colors.black};
        border-color: ${theme.colors.lightBlue};
        
        ${({ light }) => light && `
        box-shadow: unset;
        border: 1px solid ${theme.colors.black};
        color: ${theme.colors.black};
        `}
      }
    }
  `};

  ${({ light }) => light && `
    box-shadow: inset 0 0 0 0 ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `};

  ${({ small }) => small && `
    width: 40px;
    min-width: 40px;
    font-size: 14px;
  `};

  ${({ bg }) => bg && `
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
  `};

  ${({ nude }) => nude && `
    background-color: transparent;
    background-size: 30px;
  `}
`;

const buttonLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border: 1px solid ${theme.colors.lightBlue};
  background: ${theme.colors.lightBlue};
  height: 40px;
  width: 180px;
  outline: none;
  padding: 0 10px;
  margin: 10px 5px;
  font-size: 14px;
  color: ${theme.colors.white};
  transition: all 0.4s ease-out;
  box-shadow: inset 0 0 0 0 ${theme.colors.lightBlue};
  font-family: ${theme.font.primary};
  text-transform: uppercase;
  text-decoration: none;
  
  ${({ light }) => light && `
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.lightBlue};
    color: ${theme.colors.lightBlue};
  `};

  ${({ light, grey }) => light && grey && `
    border: 1px solid ${theme.colors.darkGrey};
    color: ${theme.colors.darkGrey};
  `};
`;

export { Button, buttonLink };