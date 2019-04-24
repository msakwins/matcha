import styled from 'styled-components';
import theme from '../theme';

const SettingsWrapper = styled.div`
  display: flex;
  margin: 60px auto;
  padding: 10px;

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