import styled from 'styled-components';
import theme from '../../theme';

const MyInformationsWrapper = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  
  .category__header {
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkPink};
    border-top: 1px solid ${theme.colors.darkPink};
    border-bottom: 1px solid ${theme.colors.darkPink};
    text-shadow: none;
  }

  h2 {
    text-decoration: underline;
    font-size: 16px;
    margin: 0 0 5px;
  }

  p {
    margin: 0 0 4px;

    .profile__about-cat {
      font-weight: bold;
    }
  }
`;

export default MyInformationsWrapper;