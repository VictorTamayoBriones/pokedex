import styled from 'styled-components';

import { ReactSVG } from 'react-svg';

export const BodyContainer = styled.div`
    width: 100%;
    height: 50vh;
    position: relative;
`;

export const SVGBody = styled(ReactSVG)`
    width: 100%;
    svg{
        width: 100%;
        position: absolute;
        top: -19%;
        display: none;
    }
`;

export const Container = styled.div`
    width: 90%;
    margin: 20px auto 0 auto;
    position: relative;
    z-index: 100;
`;