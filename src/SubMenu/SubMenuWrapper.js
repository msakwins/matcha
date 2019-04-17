import styled from 'styled-components';

const SubMenuWrapper = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  background: red;
  bottom: 200px;

  .sub-menu__link-settings {
    background-image: url('/settings.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 35px;
    width: 35px;
  }

  .sub-menu__link-fav {
    background-image: url('/heart-love.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 35px;
    width: 35px;
  }
`;

export default SubMenuWrapper;