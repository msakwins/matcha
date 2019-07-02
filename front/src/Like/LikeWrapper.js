import styled from 'styled-components';
import theme from '../theme';

const LikeWrapper = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  position: relative;
  margin: 0 0 10px;

  .profile__like {
    height: 60px;
    width: 60px;
    background: none;
    position: absolute;
    border: none;
    cursor: pointer;
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0;
    border-radius: 100%;
    animation-iteration-count: 1;

    ${({ like }) => like === 0 && `background-image: url('/heart.svg');`};
    ${({ like }) => like === 1 && `
      animation: like 1s cubic-bezier(.17, .89, .32, 1.49) forwards;
    `};
    ${({ like }) => like === 2 && `background-image: url('/heart-like.svg');`};
    ${({ like }) => like === 3 && `
      animation: superlike 1s cubic-bezier(.17, .89, .32, 1.49) forwards;
    `};
    ${({ like }) => like === 4 && `background-image: url('/heart-love.svg');`};
  }

  .particle {
    height: 0px;
    width: 0px;
    position: absolute;
    border-radius: 100%;
    transition: all 0.1s;
  }

  .particle1 {
    background: ${theme.colors.pink};
    box-shadow: 0px -10px 0px 0px ${theme.colors.lightBlue};
    top: 10px;
    ${({ like }) => like === 2 && `
      animation: particle1 2s;
    `}
  }

  .particle2 {
    background: ${theme.colors.pink};
    box-shadow: 10px -10px 0px 0px ${theme.colors.lightBlue};
    top: 15px;
    right: 15px;
    ${({ like }) => like === 2 && `
      animation: particle2 2.3s;
    `}
  }

  .particle3 {
    background: ${theme.colors.pink};
    box-shadow: 10px 0px 0px 0px ${theme.colors.lightBlue};
    right: 10px;
    ${({ like }) => like === 2 && `
      animation: particle3 2s;
    `}
  }

  .particle4 {
    background: ${theme.colors.pink};
    box-shadow: 10px 10px 0px 0px ${theme.colors.lightBlue};
    right: 15px;
    bottom: 15px;
    ${({ like }) => like === 2 && `
      animation: particle4 2.3s;
    `}
  }

  .particle5 {
    background: ${theme.colors.pink};
    box-shadow: 0px 10px 0px 0px ${theme.colors.lightBlue};
    bottom: 10px;
    ${({ like }) => like === 2 && `
      animation: particle5 2s;
    `}
  }


  .particle6 {
    background: ${theme.colors.pink};
    box-shadow: -10px 10px 0px 0px ${theme.colors.lightBlue};
    left: 15px;
    bottom: 15px;
    ${({ like }) => like === 2 && `
      animation: particle6 2.3s;
    `}
  }

  .particle7 {
    background: ${theme.colors.pink};
    box-shadow: -10px 0px 0px 0px ${theme.colors.lightBlue};
    left: 10px;
    ${({ like }) => like === 2 && `
      animation: particle7 2s;
    `}
  }

  .particle8 {
    background: ${theme.colors.pink};
    box-shadow: -10px -10px 0px 0px ${theme.colors.lightBlue};
    left: 15px;
    top: 15px;
    ${({ like }) => like === 2 && `
      animation: particle8 2.3s;
    `}
  }

  @keyframes superlike {
    38% {
      background-size: 40px;
      background-image: url('/heart-like.svg'); 
    }

    66% {
      background-image: url('/heart-like.svg'); 
    }

    67% {
      background-size: 1px;
      background-image: url('/heart-love.svg'); 
    }

    100% {
      background-image: url('/heart-love.svg'); 
      background-size: 30px;
    }
  }

  @keyframes like {
    38% {
      background-size: 40px;
      background-image: url('/heart.svg'); 
    }

    66% {
      background-image: url('/heart.svg'); 
    }

    67% {
      background-size: 1px;
      background-image: url('/heart-like.svg'); 
    }

    100% {
      background-image: url('/heart-like.svg'); 
      background-size: 30px;
    }
  }


  @keyframes particle1 {
    38% {
      width: 0;
      height: 0;
      top: 10px;
    }

    40% {
      height: 4px;
      width: 4px;
    }

    100% {
      height: 0px;
      width: 0px;
      top: -20px;
    }
  }

  @keyframes particle2 {
    38% {
      width: 0;
      height: 0;
      right: 15px;
      top: 15px
    }

    40% {
      height: 4px;
      width: 4px;
    }

    100% {
      height: 0px;
      width: 0px;
      right: -20px;
      top: -20px;
    }
  }

  @keyframes particle3 {
    38% {
      width: 0;
      height: 0;
      right: 10px;
    }

    40% {
      height: 4px;
      width: 4px;
    }

    100% {
      height: 0px;
      width: 0px;
      right: -20px;
    }
  }

  @keyframes particle4 {
    38% {
      width: 0;
      height: 0;
      right: 15px;
      bottom: 15px;
    }

    40% {
      height: 4px;
      width: 4px;
    }

    100% {
      height: 0px;
      width: 0px;
      right: -20px;
      bottom: -20px;
    }
  }

  @keyframes particle5 {
    38% {
      width: 0;
      height: 15px;
      bottom: 15px;
    }

    40% {
      height: 4px;
      width: 4px;
    }

    100% {
      height: 0px;
      width: 0px;
      bottom: -20px;
    }
  }


  @keyframes particle6 {
    38% {
      width: 0;
      height: 0;
      left: 10px;
      bottom: 10px;
    }

    40% {
      height: 4px;
      width: 4px;
    }

    100% {
      height: 0px;
      width: 0px;
      left: -20px;
      bottom: -20px;
    }
  }

  @keyframes particle7 {
    38% {
      width: 0;
      height: 0;
      left: 10px;
    }

    40% {
      height: 4px;
      width: 4px;
    }

    100% {
      height: 0px;
      width: 0px;
      left: -20px;
    }
  }

  @keyframes particle8 {
    38% {
      width: 0;
      height: 0;
      left: 15px;
      top: 15px;
    }

    40% {
      height: 4px;
      width: 4px;
    }

    100% {
      height: 0px;
      width: 0px;
      left: -20px;
      top: -20px;
    }
  }
`;

export default LikeWrapper;