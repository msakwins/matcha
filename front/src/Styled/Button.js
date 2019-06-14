import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  position: relative;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: ${theme.font.primary};
  height: 40px;
  min-height: 40px;
  width: 180px;
  outline: none;
  padding: 0 10px;
  margin: 10px auto;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${theme.colors.white};
  border-style: solid;
  border-width: 1px;
  letter-spacing: 0.05rem;
  background-color: ${theme.colors.white};
  
  img {
    height: 20px;
    width: 20px;
    margin: 0 5px 0 0;
  }

  span {
    font-family: ${theme.font.logo};
    text-transform: none;
    font-size: 18px;
  }

  ${({ simple }) => simple && `
    border: none;
    text-transform: initial;
    font-weight: 400;
    letter-spacing: initial;
    color: ${theme.colors.lightBlue};
    text-decoration: underline;
  `};

  ${({ small }) => small && `
    width: 40px;
    min-width: 40px;
    font-size: 14px;
  `};

  ${({ grey }) => grey && `
    background-color: ${theme.colors.darkGrey};
    border-color: ${theme.colors.darkGrey};
  `};

  ${({ color }) => color && `
    border-color: ${theme.colors[color]};
    color: ${theme.colors[color]};
    background-color: ${theme.colors.white};
  `};

  ${({ pink }) => pink && `
    background-color: ${theme.colors.pink};
    border-color: ${theme.colors.pink};
    letter-spacing: 0.05rem;
    text-shadow: 2px 0 ${theme.colors.darkpink};
  `};


  ${({ darkpink }) => darkpink && `
    background-color: ${theme.colors.darkPink};
    border-color: ${theme.colors.darkPink};
    color: ${theme.colors.pink};
  `};

  ${({ blue }) => blue && `
    border-color: ${theme.colors.lightBlue};
    background-color: ${theme.colors.lightBlue};
    letter-spacing: 0.05rem;
    text-shadow: 2px 0 ${theme.colors.black}
  `};

  ${({ img }) => img && `
    background-image: url(${img});
    background-size: 20px;
    background-position: 10px center;
    background-repeat: no-repeat;
  `};

`;

export { Button };