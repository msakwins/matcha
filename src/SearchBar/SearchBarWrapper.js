import styled from 'styled-components';
import theme from '../theme';

const SearchBarWrapper = styled.div`
  height: 40px;
  width: 100%;
  top: 20px;
  background: ${theme.colors.white};
  animation: ${({ nonebar }) => nonebar && ''};
  animation: ${({ closebar }) => closebar && 'close-search 0.3s forwards'};
  animation: ${({ openbar }) => openbar && 'open-search 0.3s forwards'};
  border-bottom: 1px solid ${theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.white};


  input {
    border: 1px solid ${theme.colors.grey};
    border-radius: 20px;
    height: 30px;
    font-size: 12px;
    padding: 0 15px;
    background: ${theme.colors.white};
    width: 250px;
    background-image: url('/search.svg');
    background-repeat: no-repeat;
    background-size: 15px;
    background-position: center right 15px;

    ::placeholder {
      color: ${theme.colors.darkBlue};
      opacity: 0.5;
    }
  }

  @keyframes open-search {
    0% {
      top: 20px;
      display: none;
    }

    100% {
      display: block;
      top: 60px;
    }
  }

  @keyframes close-search {
    0% {
      top: 60px;
      display: block;
    }

    100% {
      top: 20px;
      display: none;
    }
  }

`;

export default SearchBarWrapper;