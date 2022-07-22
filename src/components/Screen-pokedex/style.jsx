import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
    width: 100%;
    height: 250px;
    background: ${ theme.grisClaro };
    border: 3px solid ${ theme.grisOscuro };
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Screen = styled.div`
    width: 95%;
    height: 220px;
    background: ${ theme.grisOscuro };
    border-radius: 5px;
`;