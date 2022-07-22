import styled from 'styled-components';

import { ReactSVG } from 'react-svg';

export const BodyContainer = styled.div`
    width: 100%;
    height: 50vh;
    position: relative;
`;

export const SVGBody = styled(ReactSVG)`
    width: 100%;
    height: max-content;
    svg{
        width: 100%;
        position: absolute;
        top: -15%;
    }
`;