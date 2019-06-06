import styled from 'styled-components';
import theme from '../../theme';

const RateWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  align-items: center;

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
      ${({nice}) => nice === 1 && `
          background-image: url('star_full_yellow.svg');
        }
      `}
    }

    div:nth-child(-n + 2) {
      ${({nice}) => nice === 2 && `
          background-image: url('star_full_yellow.svg');
        }
      `}
    }

    div:nth-child(-n + 3) {
      ${({nice}) => nice === 3 && `
          background-image: url('star_full_yellow.svg');
        }
      `}
    }

    div:nth-child(-n + 4) {
      ${({nice}) => nice === 4 && `
          background-image: url('star_full_yellow.svg');
        }
      `}
    }

    div:nth-child(-n + 5) {
      ${({nice}) => nice === 5 && `
          background-image: url('star_full_yellow.svg');
        }
      `}
    }
  }

  .rate__smart {
    display: flex;
    flex-direction: row;

    div:nth-child(-n + 1) {
      ${({smart}) => smart === 1 && `
          background-image: url('star_full_blue.svg');
        }
      `}
    }

    div:nth-child(-n + 2) {
      ${({smart}) => smart === 2 && `
          background-image: url('star_full_blue.svg');
        }
      `}
    }

    div:nth-child(-n + 3) {
      ${({smart}) => smart === 3 && `
          background-image: url('star_full_blue.svg');
        }
      `}
    }

    div:nth-child(-n + 4) {
      ${({smart}) => smart === 4 && `
          background-image: url('star_full_blue.svg');
        }
      `}
    }

    div:nth-child(-n + 5) {
      ${({smart}) => smart === 5 && `
          background-image: url('star_full_blue.svg');
        }
      `}
    }
  }

`;

export default RateWrapper;