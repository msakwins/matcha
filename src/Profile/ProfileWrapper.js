import theme from '../theme.js';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  height: 100%;

  img {
    width: 160px;
    border-radius: 100%;

    ${({ photo }) => photo && `
      width: 100%;
      height: auto;
      border-radius: 0;
    `}
  }

  .profile__user-name {
    margin: 10px 0 0;
    font-weight: bold;
    letter-spacing: 0.05rem;
    color: ${theme.colors.black};
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
`;

export default ProfileWrapper