import styled from 'styled-components';
import theme from '../theme';

const AboutWrapper = styled.div`
color: ${theme.colors.black};
background-color: ${theme.colors.white};
padding: 10px;

  span {
    color: ${theme.colors.white};
    font-size: 22px;
    font-family: ${theme.font.logo};
    text-shadow: 2px 2px ${theme.colors.darkPink};
    font-weight: 600;
    margin: 0 2px;
  }

  p {
    max-width: 240px;
    text-align: left;
    padding: 10px;
    margin: 20px auto;
    font-size: 14px;

    span {
      font-size: 14px;
      text-shadow: none;
      color: ${theme.colors.black};
    }

  }

  img {
    width: 260px;
    height: auto;
    margin: 10px 0 10px -20px;
  }
`;

export default AboutWrapper;