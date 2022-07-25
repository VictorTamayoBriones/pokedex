import styled from 'styled-components';
import { theme } from '../../theme';

export const Speaker = styled.div`
    width: 50px;
    height: 30px;
    background: ${ theme.grisClaro };
    position: absolute;
    right: 7px;
    top: -30px;
    border-radius: 3px;

    &::before{
        content: '';
        width: 80%;
        height: 5px;
        top: 28%;
        left: 10%;
        background: ${ theme.grisOscuro };
        position: absolute;
        border-radius: 3px;
    }

    &::after{
        content: '';
        width: 80%;
        height: 5px;
        top: 60%;
        left: 10%;
        background: ${ theme.grisOscuro };
        position: absolute;
        border-radius: 3px;
    }
`;