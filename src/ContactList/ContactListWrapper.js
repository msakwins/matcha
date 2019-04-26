import theme from '../theme.js';
import styled from 'styled-components';

const ContactListWrapper = styled.div`
  width: 100%;
  height: 100%; /* WHY */
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  margin: 0 auto 0;

  @media all and (min-width: 768px) {
    margin: 0 0 0 60px;
  }

  .contact-list__title {
    position: absolute;
    text-align: center;
    width: 100%;
    font-size: 16px;
  }

  .contact-list__item {
    margin: 5px 10px;
    padding: 10px 10px;
    font-size: 12px;
    height: 50px;
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    transition: height 0.5s;
    position: relative;

    @media all and (min-width: 768px) {
      max-width: 300px;
    }
  }
  
  a {
    display: flex;
    align-items: center;
  }

  .contact-list__user-image {
    height: 30px;
    width: 30px;
    margin: 0 10px 0 0;
    border-radius: 100%;
  }

  .contact-list__user-name {
    margin: 0 10px 0 0;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.05rem;
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
    border: none;
  }
  


`;

export default ContactListWrapper;