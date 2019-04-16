import theme from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  width: 100%;
  height: 100%;
  background: ${theme.colors.white};
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  position: relative;

  .contact-item__message-list {
  }

  .contact-item__send-block {
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    animation: open 0.4s;
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