import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const Header = styled.header`
    width: 100%;
`;

export const SVGHeader = styled(ReactSVG)`
    width: 100%;
    margin-top: -10px;
    height: max-content;
    svg{
        width: 100%;
    }
`;