import styled from 'styled-components';
import { theme } from '../../theme';

export const Header = styled.header`
    width: 100%;
    height: 80px;
    margin-top: 5px;
    overflow: hidden;
    border: 5px solid ${ theme.grisOscuro };
    border-right: none;
    border-bottom: none;
    border-radius: 10px 10px 0px 10px;
    position: relative;

    &::before{
        content: '';
        width: 500px;
        height: 10px;
        border-right: 5px solid ${ theme.grisOscuro };
        border-bottom: 5px solid ${ theme.grisOscuro };
        border-radius: 0 0 10px 0;
        position: absolute;
        bottom: 0;
        right: 85px;
    }

    &::after{
        content: '';
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        top: 10px;
        left: 10px;
        background: ${ theme.azul };
        border: 1px solid ${ theme.grisOscuro };
        box-shadow: 1px 1px 5px ${ theme.grisOscuro };
    }


`;

export const Lights = styled.div`
    width: 50%;
    height: 100%;
    border-bottom: 5px solid ${ theme.grisOscuro };
    border-radius: 0 0 0px 0;

    &::before{
        content: '';
        width: 50px;
        height: 40px;
        border-right: 5px solid ${ theme.grisOscuro };
        border-top: 5px solid ${ theme.grisOscuro };
        border-bottom: 5px solid ${ theme.grisOscuro };
        border-radius: 0 10px 10px 0;
        position: absolute;
        top: -8px;
        right: 0;
    }
    &::after{
        content: '';
        width: 50px;
        height: 25px;
        border-right: 5px solid ${ theme.grisOscuro };
        border-bottom: 5px solid ${ theme.grisOscuro };
        border-radius: 0 0 10px 0;
        position: absolute;
        bottom: 8px;
        right: 35px;
        transform: rotate(180deg);
    }

    @media(min-width: 419px){
        border-radius: 0;
    }

    @media(min-width: 620px){
        border-radius: 0;
    }

`;

export const Light = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${ theme.verde1 };
    border: solid 1px ${ theme.grisOscuro };
    transform: translateX(100px) translateY(5px);
    box-shadow: 1px 1px 5px ${ theme.grisOscuro };

    &::after{
        content: '';
        width: 18px;
        height: 18px;
        border-radius: 50%;
        position: absolute;
        background: ${ theme.naranja };
        border: solid 1px ${ theme.grisOscuro };
        transform: translateX(30px) translateY(-1px);
        box-shadow: 1px 1px 5px ${ theme.grisOscuro };
    }

    &::before{
        content: '';
        width: 18px;
        height: 18px;
        border-radius: 50%;
        position: absolute;
        background: ${ theme.rojo };
        border: solid 1px ${ theme.grisOscuro };
        transform: translateX(60px) translateY(-1px);
        box-shadow: 1px 1px 5px ${ theme.grisOscuro };
    }
`;