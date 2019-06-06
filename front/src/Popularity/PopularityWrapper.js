import styled from 'styled-components';
import theme from '../theme';

const PopularityWrapper = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 0 10px;
  ${({ popularity }) => popularity === "fun" &&
    `background-image: url("star_orange.svg");`
  }

  ${({ popularity }) => popularity === "smart" &&
    `background-image: url("star_blue.svg");`
  }

  ${({ popularity }) => popularity === "pretty" &&
    `background-image: url("star_pink.svg");`
  }

  ${({ popularity }) => popularity === "nice" &&
    `background-image: url("star_yellow.svg");`
  }

  background-repeat: no-repeat;
  background-size: 60px;
  background-position: top 0px right 10px;

  span {
    margin: 0 25px 6px 0;
    color: ${theme.colors.white};
    font-size: 18px;
    font-weight: bold;
  }
`;

export default PopularityWrapper;