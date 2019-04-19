import styled from 'styled-components';

export default (Component) => styled(Component)`
  width: 100%;
  max-width: 1024px;
  padding: 0 20px;
  margin: 70px auto 0;
  color: ${props => props.theme.fontPrimary};
  background: ${props => props.theme.bgPrimary};
  overflow: auto;
  position: relative;

  img {
    height: 50px;
  }
`;