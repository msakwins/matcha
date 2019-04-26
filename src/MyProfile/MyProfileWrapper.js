import theme from '../theme.js';
import styled from 'styled-components';


const MyProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.darkGrey};
  padding: 10px 10px 0;
  width: 100%;

  @media all and (min-width: 768px) {
    margin: 0 0 0 60px;
  }

  img {
    width: 160px;
    border-radius: 100%;
    
    ${({ photo }) => photo && `
      width: 100%;
      height: 100%;
      border-radius: 0;
      `}
  }

  .my-profile__edit {
    height: 18px;
    margin: 5px 0;
  }
  
  .profile__info {
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    .profile__name {
      font-weight: bold;
      letter-spacing: 0.05rem;
      color: ${theme.colors.black};
    }
  
    .profile__age {
      font-size: 14px;
      color: ${theme.colors.violet};
      font-weight: bold;
    }
  
    .profile__activity {
      font-size: 14px;
      color: ${theme.colors.black};
      font-weight: bold;
    }
  }

  .profile__about {
    text-align: left;
    margin: 10px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    
    h2 {
      text-decoration: underline;
      font-size: 16px;
      margin: 0 0 5px;
    }
  }

  p {
    margin: 0 0 4px;

    .profile__about-cat {
      font-weight: bold;
    }
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

export default MyProfileWrapper;