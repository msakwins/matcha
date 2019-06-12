import theme from '../theme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContactItemWrapper = styled(Link)`
  height: 50px;
  padding: 5px;
  background: ${theme.colors.white};
  display: flex;
  flex-direction: row;
  position: relative;
  top: 0;
  cursor: pointer;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  
  .contact-item__user-image {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    margin: 0 10px 0 5px;
  }

  .contact-item__open-button {
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    margin-left: 1px;
    background: none;

    &:before,
    &:after{
      content: "";
      position: absolute;
      background-color: ${theme.colors.black};
      transition: transform 0.25s ease-out;
    }

    /* Vertical line */
    &:before{
        top: 0;
        left: 11px;
        width: 2px;
        height: 20px;
        margin-left: -2px;
    }

    /* horizontal line */
    &:after {
        top: 11px;
        left: 0;
        width: 20px;
        height: 2px;
        margin-top: -2px;
    }
  }
  .contact-item__message-list {
    height: 100%;
    position: relative;
  }


  .minus {
    :before { transform: rotate(90deg); }
    :after { transform: rotate(180deg); }
  }

`;

export default ContactItemWrapper;