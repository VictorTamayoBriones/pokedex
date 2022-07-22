import styled from 'styled-components';
import { theme } from '../theme';

export const Pokedex = styled.div`
    width: 95%;
    height: 85vh;
    margin: 2vh auto;
    padding: 0 10px;
    background: ${ theme.rojo };
    border: 10px solid ${ theme.grisOscuro };
    border-radius: 20px;
`;