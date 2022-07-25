import styled from 'styled-components';
import { IconChevronUp } from '@tabler/icons';
import { IconChevronDown } from '@tabler/icons';
import { theme } from '../../theme';

export const ContaineDetails = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    svg{
        display: ${ (props)=>props.showArrow === 0 ? 'none' : 'block'};
    }
`;

export const ArrowUp = styled(IconChevronUp)`
    width: 30px;
    height: 30px;
    position: absolute;
    top: ${ (props)=>props.showDetails ? 10 : -50 };
    animation: arrowAnimate 2s infinite ease-in-out;

    @keyframes arrowAnimate{
        0%{
            transform: translateY(-10px);
        }
        50%{
            transform: translateY(10px);
        }
        100%{
            transform: translateY(-10px);
        }
    }
`;

export const ArrowDown = styled(IconChevronDown)`
    width: 30px;
    height: 30px;
    position: absolute;
    top: ${ (props)=>props.showDetails ? 10 : -50 };
    animation: arrowAnimate 2s infinite ease-in-out;

    @keyframes arrowAnimate{
        0%{
            transform: translateY(-10px);
        }
        50%{
            transform: translateY(10px);
        }
        100%{
            transform: translateY(-10px);
        }
    }
`;

export const Details = styled.section`
    width: 100%;
    height: ${ (props)=>props.showDetails ? '65vh' : '0vh'};
    overflow: hidden;
    padding: 10px;
    background: ${ theme.rojo };
    position: absolute;
    bottom: 0;
    z-index: 101;
    border: solid 5px ${ theme.grisOscuro };
    border-top: none;
    border-radius: 0 0 10px 10px;
    transition: 1s cubic-bezier(0.01,0.04,0,0.19) all;
`;