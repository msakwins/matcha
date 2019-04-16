import theme from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  width: 100%;
  height: 80vh;
  background: ${theme.colors.darkBlue};
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;

  .contact-list__item {
    max-width: 300px;
    margin: 5px 10px;
    padding: 10px 10px;
    font-size: 12px;
    height: 50px;
    background: ${theme.colors.white};
    color: ${theme.colors.mediumBlue};
    display: flex;
    flex-direction: column;
    transition: height 0.5s;
    position: relative;
  }
  
  .open {
    height: 240px;
  }

  a {
    display: flex;
    align-items: center;
  }

  .contact-list__user-image {
    height: 30px;
    width: 30px;
    margin: 0 10px 0 0;
  }

  .contact-list__user-name {
    margin: 0 10px 0 0;
    font-size: 14px;
    color: ${theme.colors.darkBlue};
  }
  
  .contact-list__item-preview {
    position: relative;
    font-size: 14px;
    height: 30px;
    min-height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    top: 0;
  }

  button {
    cursor: pointer;
    position: absolute;
    right: 0;
    outline: none;
    height: 18px;
    width: 18px;
    padding: 0;
    margin: 0;
    background: none;
    background-image: url('down-arrow.svg');
    background-repeat: no-repeat;
    border: none;
  }
`;