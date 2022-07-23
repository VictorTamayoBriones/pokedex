import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const Header = styled.header`
    width: 100%;
    margin-top: 5px;
    overflow: hidden;
`;

export const SVGHeader = styled(ReactSVG)`
    width: 100%;
    height: max-content;
    svg{
        width: 100%;
    }

    @media(min-width: 504px){
        display: none;
    }
`;