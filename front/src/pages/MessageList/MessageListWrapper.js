import theme from '../../theme';
import styled from 'styled-components';

const MessageListWrapper = styled.div`
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 0px;
  box-shadow: none;
  ${({ view, preview }) => (view === 1 || preview === 1) && `
    box-shadow: 4px -4px 0px 0px ${theme.colors.grey};
    border: 1px solid ${theme.colors.grey};
    border-top: none;
  `}

  ${({ view }) => (view === 2) && `
    animation: animCloseView 0.4s;
  `}

  ${({ preview }) => (preview === 2) && `
    animation: animClosePreview 0.4s;
  `}

  ${({ preview }) => (preview === 1) && `
    animation: animOpenPreview 0.4s forwards;
  `}

  ${({ view }) => (view === 1) && `
    animation: animOpenView 0.4s forwards;
  `}

  .message-list {
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 130px;
    max-height: 130px;
    overflow-y: scroll;

    ${({ view, preview }) => (view === 2 || preview === 2) && `
      animation: animCloseView 0.3s forwards;
    `}

    ${({ view, preview }) => (view === 1 || preview === 1) && `
      animation: animOpenView 0.3s forwards;
      max-height: unset;
      height: auto;
    `}
  }


  @keyframes animOpenPreview {
    0% {
      height: 0px;
    }

    100% {
      height: 190px;
    }
  }

  @keyframes animClosePreview {
    0% {
      height: 190px;
    }

    100% {
      height: 0px;
    }
  }

  @keyframes animOpenView {
    0% {
      height: ${({ preview }) => preview === 1 ? '190px' : '0px'};
    }

    100% {
      height: 100%;
    }
  }

  @keyframes animCloseView {
    0% {
      height: ${({ preview }) => preview === 1 ? '190px' : '0px'};
    }

    100% {
      height: 0px;
    }
  }
`;

export default MessageListWrapper;