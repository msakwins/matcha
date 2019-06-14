import styled from 'styled-components';
import theme from '../theme';

const LikedWrapper = styled.span`
  position: absolute;
  left: 30px;
  bottom: 28px;
  height: 22px;
  width: 22px;
  background-image: url('heart-not-liked.svg');
  background-repeat: no-repeat;

`;

export default LikedWrapper;