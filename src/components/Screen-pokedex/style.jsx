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
    background: ${(props)=>props.color ? props.color : theme.grisOscuro };
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    pointer-events: none;

    h1{
        opacity: ${(props)=>props.textIsVisible ? '1' : '0'};
        transition: 1s ease-in all;
        position: absolute;
    }

    ul{
        list-style: none;
        li{
            border-bottom: solid 1px ${ theme.amarilloClaro };
            margin: 10px 0;
        }
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

    @media(min-width: 600px){
        img{
            width: 30%;
        }
    }
`;