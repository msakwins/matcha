import styled from 'styled-components'
import React from 'react';
import theme from '../theme';
const SendWrapper = styled.div`
  height: 40px;
  flex-direction: row;
  align-items: center;
  animation: animPreview 0.6s;
  position: relative;
  margin: 10px;
  opacity: 0;
  transition: opacity 0.1s;

  ${({ view, preview }) => (view === 1 || preview === 1) &&`
    opacity: 1;
  `}

${({ view, preview }) => (view === 2 && preview === 2) &&`
    opacity: 0;
  `}

  input {
    -webkit-appearance: none;
    height: 40px;
    width: 100%;
    border: 1px solid ${theme.colors.lightBlue};
    padding: 0 10px;
    border-radius: 0;
    font-size: 16px;
  }

  .message-list__send {
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

`;

const Send = ({ view, preview }) =>
<SendWrapper view={view} preview={preview}>
  <input placeholder="Type your message here"></input>
  <button className="message-list__send"></button>
</SendWrapper>

export default Send;