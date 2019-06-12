import styled from 'styled-components';
// import theme from '../theme';

const Like = styled.button`
  height: 60px;
  width: 60px;
  background: none;
  border: none;
  cursor: pointer;
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0;
  border-radius: 100%;
  
  ${({ like }) => like === 0 && `background-image: url('/heart.svg')`};
  ${({ like }) => like === 1 && `background-image: url('/heart-like.svg')`};
  ${({ like }) => like === 2 && `background-image: url('/heart-love.svg')`};

  ${({ like, anim }) => like === 0 && anim && `background-image: url('/heart.svg')`};
  ${({ like, anim }) => like === 0 && anim && `animation: like 1s cubic-bezier(.17, .89, .32, 1.49) forwards`};
  ${({ like, anim }) => like === 0 && anim && `animation: superlike 1s cubic-bezier(.17, .89, .32, 1.49) forwards`};
  
`;

export default Like;