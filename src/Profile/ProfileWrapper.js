import theme from '../theme.js';
import styled from 'styled-components';


const ProfileWrapper = styled.div`
  display: flex;
  margin: 60px auto;
  padding: 10px;
  flex-direction: column;
  align-items: center;
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
    color: ${theme.colors.black};
  }

  .profile__fav {
    height: 40px;
    width: 40px;
    background: none;
    border: none;
    cursor: pointer;
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 0 10px;

    ${({ like }) => like === 1 && `background-image: url('/heart-like.svg');`}
    ${({ like }) => like === 0 && `background-image: url('/heart.svg');`}
    ${({ like }) => like === 2 && `
      background-image: url('/heart-love.svg');
      animation: superlike 1s cubic-bezier(.17, .89, .32, 1.49);

    `}
  }

  .profile__heart {
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    position: relative;

    .particle1 {
      height: 0px;
      width: 0px;
      background: ${theme.colors.lightBlue};
      border-radius: 100%;
      box-shadow: 14px 6px 0px 0px ${theme.colors.pink};
      transition: all 0.1s;
      position: absolute;
      top: 0;
      ${({ like }) => like === 2 && `
        animation: particle1 1.5s;
      `}
    }

    .particle2 {
      height: 0px;
      width: 0px;
      background: ${theme.colors.darkGrey};
      border-radius: 100%;
      box-shadow: 14px 6px 0px 0px ${theme.colors.darkPink};
      transition: all 0.1s;
      position: absolute;
      right: 10px;
      top: 20px;
      ${({ like }) => like === 2 && `
        animation: particle2 1.3s;
      `}
    }
  }

  .profile__love-modal {
    z-index: 1;
    height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px 0px ${theme.colors.grey};
    position: absolute;
    top: 40%;
    background: ${theme.colors.white};

    button {
      background-color: ${theme.colors.darkPink};
      color: ${theme.colors.white};
      border: none;
      border-radius: 20px;
      width: 120px;
      height: 40px;
      margin: 20px 0;
      font-size: 14px;
    }
  }

  @keyframes superlike {
    10% {
      background-size: 40px;
    }

    27% {
      background-size: 1px;
    }
  }

  @keyframes particle1 {
    10% {
      height: 0px;
      width: 0px;
      top: 0;
    }

    20% {
      height: 8px;
      width: 8px;
    }

    100% {
      height: 0px;
      width: 0px;
      top: -20px;
    }
  }

  @keyframes particle2 {
    10% {
      height: 0px;
      width: 0px;
      right: 0;
      top: 20px;
    }

    20% {
      height: 8px;
      width: 8px;
    }

    100% {
      height: 0px;
      width: 0px;
      right: -10px;
      top: 10px;
    }
  }
`;

export default ProfileWrapper