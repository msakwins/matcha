import theme from '../theme.js';
import styled from 'styled-components';

const ContactItemWrapper = styled.div`
  height: 50px;
  padding: 10px;
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 10px;
  top: 0;
  box-shadow: 4px -4px 0px 0px ${theme.colors.grey};
  border: 1px solid ${theme.colors.grey};
  cursor: pointer;
  border-bottom: ${({ view, preview }) => (view !== 1 && preview !== 1) ? `1px solid ${theme.colors.grey}` : 'none'};

  .contact-item__message-list {
    height: 100%;
    position: relative;
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

  .minus {
    :before { transform: rotate(90deg); }
    :after { transform: rotate(180deg); }
  }

`;

export default ContactItemWrapper;