import theme from '../theme.js';
import styled from 'styled-components';


export default (Component) => styled(Component)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
  height: 90vh;
  background: ${theme.colors.darkBlue};
  color: ${theme.colors.white};
`;