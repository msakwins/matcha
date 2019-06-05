import styled from 'styled-components';
import theme from '../theme';

const RateWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;

  .star {
    background-image: url('star.svg');
    height: 30px;
    width: 30px;
    margin: 0 5px;
    background-repeat: no-repeat;
  }

  .rate__nice {
    display: flex;
    flex-direction: row;

    div:nth-child(-n + 1) {
      ${({rate}) => rate === 1 && `
          background-image: url('star_full.svg');
        }
      `}
    }

    div:nth-child(-n + 2) {
      ${({rate}) => rate === 2 && `
          background-image: url('star_full.svg');
        }
      `}
    }

    div:nth-child(-n + 3) {
      ${({rate}) => rate === 3 && `
          background-image: url('star_full.svg');
        }
      `}
    }

    div:nth-child(-n + 4) {
      ${({rate}) => rate === 4 && `
          background-image: url('star_full.svg');
        }
      `}
    }

    div:nth-child(-n + 5) {
      ${({rate}) => rate === 5 && `
          background-image: url('star_full.svg');
        }
      `}
    }
  }

`;

export default RateWrapper;