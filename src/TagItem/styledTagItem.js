import { theme } from '../theme.js';
import styled from 'styled-components';


const StyledTagItem = styled.div`
  display: flex;
  font-size: 12px;
  background: ${theme.colors.violet};
  color: ${theme.colors.white};
  padding: 2px 4px;
  border-radius: 4px;
  margin: 0 5px 5px 0;
  cursor: pointer;

  :before {
    content: '';
  }
`;

export default StyledTagItem;