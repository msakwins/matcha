import { theme } from '../theme.js';
import styled from 'styled-components';


const StyledProfile = styled.div`
  display: flex;
  margin: 70px 0 0 0;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.white};
  padding: 10px;
  height: 100%;

  img {
    width: 160px;
    border-radius: 100%;

    ${({ photo }) => photo && `
      width: 100%;
      height: 100%;
      border-radius: 0;
    `}
  }

  .profile__user-name {
    margin: 10px 0;
    font-weight: bold;
    letter-spacing: 0.05rem;
    color: ${theme.colors.darkBlue};
  }

  .profile__fav {
    height: 40px;
    width: 40px;
    background: none;
    border: none;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0 0 10px;

    ${({ like }) => like === 1 && `background-image: url('/heart-like.svg');`}
    ${({ like }) => like === 0 && `background-image: url('/heart.svg');`}
    ${({ like }) => like === 2 && `background-image: url('/heart-love.svg');`}
  }
`;

export default StyledProfile