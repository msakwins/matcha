import theme from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  width: auto;
  height: 50px;
  overflow: hidden;
  padding: 10px;
  background: ${theme.colors.white};
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  position: relative;
  transition: height 0.4s;
  margin: 10px;

  ${({ open }) => open && `
    height: 240px;
  `}

  ${({ extended, open }) => extended &&`
    height: 100%;
    margin: 0 10px 10px;
  `}

  .contact-item__message-list {
    height: 100%;
    position: relative;

    ${({ open }) => open && `
      animation: open 0.4s ease-out
    `};

  }

  .contact-item__send-block {
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 40px;
    display: none;
    flex-direction: row;
    align-items: center;
    animation: open 0.6s;

    ${({ extended, open }) => (extended || open) && `
      display: flex;
    `}

  }

  input {
    height: 40px;
    width: 100%;
    border: 1px solid ${theme.colors.lightBlue};
    padding: 0 10px;
  }

  .contact-item__send {
    cursor: pointer;
    border: 2px solid ${theme.colors.lightBlue};
    outline: none;
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    padding: 0;
    margin: 0;
    background: ${theme.colors.lightBlue};
    background-image: url('send.svg');
    background-repeat: no-repeat;
    background-size: 26px 26px;
    background-position: center center;
    overflow: hidden;
  }

  @keyframes open {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
`;