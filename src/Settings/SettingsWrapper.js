import styled from 'styled-components';
import theme from '../theme';

const SettingsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 60px auto;
  flex-direction: column;
  padding: 10px;

  @media all and (min-width: 768px) {
    width: calc(100% - 60px);
  }
  
  .settings__theme {
    display: flex;
    flex-direction: row;
    margin: 0 0 20px;
  }

  .settings__theme-1 {
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background: ${theme.colors.darkBlue};
    border: 1px solid ${theme.colors.grey};
    margin: 0 10px;
  }

  .settings__theme-2 {
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background: ${theme.colors.lightBlue};
    border: 1px solid ${theme.colors.grey};
    margin: 0 10px;
  }

  .settings__theme-3 {
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.grey};
    margin: 0 10px;
  }

`;

export default SettingsWrapper;