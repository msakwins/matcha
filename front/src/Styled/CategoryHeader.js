import styled from 'styled-components';
import theme from '../theme';

const CategoryHeader = styled.div`
    background-color: ${theme.colors.pink};
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    letter-spacing: 0.05rem;
    text-shadow: 2px 0 ${theme.colors.darkPink};
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
`;

export default CategoryHeader;