import theme from '../theme.js';
import styled from 'styled-components';


const MyProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.darkGrey};
  padding: 10px 10px 0;
  width: 100%;
  height: 100%;
  position: relative;

  .my-profile__user-photo {
    
    img {
      width: 160px;
      border-radius: 100%;
      
      ${({ photo }) => photo && `
        width: auto;
        padding: 10px;
        max-width: 1000px;
        height: auto;
        margin: auto;
        border-radius: 0;
      `}
    }

    ${({ photo }) => photo && `
      height: 100%;
      width: 100%;
      top: 0;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.85);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
    `}

    .my-profile__user-photo__info {
      position: absolute;
      bottom: 0;
      height: 60px;
      width: 100%;
      border-top: 1px solid ${theme.colors.mediumGrey};
      color: ${theme.colors.grey};
      padding: 10px;
      display: flex;
      flex-direction: column;
    }
  }

  .my-profile__user-info {
    position: relative;
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
`;

export default MyProfileWrapper;