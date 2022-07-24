import styled from 'styled-components';
import { theme } from '../../theme';

export const BodyContainer = styled.div`
    width: 100%;
    height: 80%;
    margin-top: 10px;
    position: relative;
    border: solid 5px ${ theme.grisOscuro };
    border-radius: 10px 0 10px 10px;

    &::before{
        content: '';
        width: 65px;
        height: 35px;
        position: absolute;
        top: -40px;
        right: -5px;
        border: solid 5px ${ theme.grisOscuro };
        border-bottom: none;
        border-radius: 10px 10px 0 0;
        background: ${ theme.rojo };
    }
`;

export const Container = styled.div`
    width: 90%;
    margin: 20px auto 0 auto;
    position: relative;
    z-index: 100;
`;