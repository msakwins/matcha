import styled from 'styled-components';
import theme from '../../theme';

const SettingsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  padding: 10px;

  @media all and (min-width: 768px) {
    width: calc(100% - 60px);
  }
  
  .settings__pink {
    border: 3px double ${theme.colors.darkPink};
    margin: 10px auto;
    width: 200px;
  }

  .settings__blue {
    border: 3px double ${theme.colors.lightBlue};
    margin: 10px auto;
    width: 200px;
  }

  .settings__grey {
    border: 3px double ${theme.colors.darkGrey};
    margin: 10px auto;
    width: 200px;
  }
`;

export default SettingsWrapper;