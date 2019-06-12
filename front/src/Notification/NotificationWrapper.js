import styled from 'styled-components';
import theme from '../theme';

const NotificationWrapper = styled.div`
  border: 1px solid ${theme.colors.grey};
  height: 50px;
  width: calc(100% - 10px);
  top: -65px;
  position: absolute;
  background-color: ${theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 5px;
  padding: 0 10px;
  cursor: pointer;
  @media all and (min-width: 768px) {
    width: 400px;
  }

  ${({ notification }) => notification && `
    animation: notificationAnim 4s ease;
    `
  }};

  img {
    height: 30px;
    width: 30px;
    margin: 0 10px 0 0;
  }

  @keyframes notificationAnim {
    0% {
      top: -65px;
    }

    20% {
      top: 5px;
    }

    80% {
      top: 5px;
    }

    100% {
      top: -65px;
    }
  }
`;

export default NotificationWrapper;