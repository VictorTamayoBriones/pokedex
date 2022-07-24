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
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h1{
        opacity: ${(props)=>props.textIsVisible ? '1' : '0'};
        transition: 1s ease-in all;
        position: absolute;
    }

    p{
        text-align: center;
        font-size: 30px;
        position: absolute;
        display: ${(props)=>props.isLoading ? 'block' : 'none'};
    }

    img{
        width: 100%;
    }
`;