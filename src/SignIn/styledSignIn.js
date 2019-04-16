import theme from '../theme.js';
import styled from 'styled-components';


export default (Component) => styled(Component)`
  padding: 10px;
  max-width: 350px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 18px;
  }

  .homepage__link {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    font-size: 14px;
    font-family: ${theme.font.primary};
    margin: 10px 0 0;
  }
`;