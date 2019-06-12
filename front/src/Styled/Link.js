import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../theme';

const styledLink = styled(Link)`
  cursor: pointer;
  outline: none;
  font-size: 14px;
  margin: 10px 0;
  color: ${theme.colors.lightBlue};
  border: 1px solid ${theme.colors.lightBlue};
`;

export default styledLink;