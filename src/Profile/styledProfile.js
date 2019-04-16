import theme from '../theme.js';
import styled from 'styled-components';

export default (Component) => styled(Component)`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
  }

`;