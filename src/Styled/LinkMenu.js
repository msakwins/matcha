import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../theme';

const LinkMenu = styled(Link)`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  border-radius: 100%;

  background-size: 30px;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  margin: 0 8px;

  :visited {
    color: ${theme.colors.black};
  }

  ${({ small }) => small && `
    height: 30px;
    width: 30px;
    background-size: 19px;
  `}

  @media all and (min-width: 768px) {
    height: 60px;
    width: 60px;
    background-position: 15px center;
    border-radius: 0;
    border-bottom: 1px solid ${theme.colors.grey};
    margin: 0;
    position: relative;

    ${({ menuClass }) => menuClass === "-open" && `
      transition: width 0.4s;
      width: 200px;
    `};

    ${({ menuClass }) => menuClass === "-close" && `
      transition: width 0.4s;
      width: 60px;
    `};
  }
`;

const LinkSettings = styled(LinkMenu)`
  ${({ selected }) => selected ?
    `background-image: url('/settings-selected.svg');`
    :
    `background-image: url('/settings.svg');`
  };
`;

const LinkFavs = styled(LinkMenu)`
  background-size: 28px;
  ${({ selected }) => selected ?
    `background-image: url('/heart-selected.svg');`
    :
    `background-image: url('/heart.svg');`
  };
`;

const LinkMessages = styled(LinkMenu)`
  ${({ selected }) => selected ?
    `background-image: url('/chat-selected.svg');`
    :
    `background-image: url('/chat.svg');`
  };
`;

const LinkProfile = styled(LinkMenu)`
  background-image: url('/user.png');
  height: 34px;
  width: 34px;
  background-size: 34px;

  @media all and (min-width: 768px) {
    background-size: 36px;
    background-position: 11px center;
  }
`;

export { LinkSettings, LinkFavs, LinkMessages, LinkProfile };