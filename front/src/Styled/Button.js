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

  ${({ small }) => small && `
    width: 40px;
    min-width: 40px;
    font-size: 14px;
  `};

  ${({ grey }) => grey && `
    background-color: ${theme.colors.darkGrey};
    border-color: ${theme.colors.darkGrey};
  `};

  ${({ greyBorder }) => greyBorder && `
    border: 1px solid ${theme.colors.darkGrey};
    color: ${theme.colors.darkGrey};
    background-color: ${theme.colors.white};
  `};

  ${({ pink }) => pink && `
    background-color: ${theme.colors.pink};
    border-color: ${theme.colors.pink};
    letter-spacing: 0.05rem;
    text-shadow: 2px 0 ${theme.colors.darkPink};
  `};

  ${({ pinkBorder }) => pinkBorder && `
    border: 1px solid ${theme.colors.pink};
    color: ${theme.colors.pink};
    background-color: ${theme.colors.white};
  `};

  ${({ darkPink }) => darkPink && `
    background-color: ${theme.colors.darkPink};
    border-color: ${theme.colors.darkPink};
    color: ${theme.colors.pink};
  `};

  ${({ darkPinkBorder }) => darkPinkBorder && `
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.darkPink};
    color: ${theme.colors.darkPink};
  `};

  ${({ blue }) => blue && `
    border-color: ${theme.colors.lightBlue};
    background-color: ${theme.colors.lightBlue};
    letter-spacing: 0.05rem;
    text-shadow: 2px 0 ${theme.colors.black}
  `};

  ${({ blueBorder }) => blueBorder === "blueBorder" && `
    border-color: ${theme.colors.lightBlue};
    color: ${theme.colors.lightBlue};
    background-color: ${theme.colors.white};
  `};

  ${({ violetBorder }) => violetBorder && `
    color: ${theme.colors.violet};
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.violet};
  `};

  ${props => props.redBorder && `
    border: 1px solid red;
  `}

  ${({ img }) => img && `
    background-image: url(${img});
    background-size: 20px;
    background-position: 10px center;
    background-repeat: no-repeat;
  `};
`;

export { Button };