import styled from 'styled-components';
import { theme } from '../../theme';

export const Form = styled.form`
    width: 100%;
    margin-top: 20px;

    .buttons{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        justify-content: space-between;
        button{
            border-radius: 5px;
            font-size: 18px;
            padding: 5px 15px;
            border: 1px solid ${ theme.grisOscuro };
            box-shadow: 0px 1px 5px ${ theme.grisButton };

            &:nth-child(1){
                background: ${ theme.verde2 };
            }
            &:nth-child(2){
                background: ${ theme.naranja };
            }
            &:nth-child(3){
                background: ${ theme.rojo };
            }
        }
    }

    
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    label{
        position: absolute;
        z-index: 1;
        left: 7px;
        top: 7px;
        font-size: 22px;
        animation: placeholderAnimate .5s infinite ease-in-out;
        pointer-events: none;

        @keyframes placeholderAnimate {
            0%{
                color: #4c4c4c;
            }
            50%{
                color: #b7b7b7
            }
            100%{
                color: #e1e1e1
            }
        }
    }

    input{
        width: 100%;
        background: ${ theme.grisOscuro };
        border: 2px solid ${ theme.grisButton };
        border-radius: 5px;
        padding: 5px;
        outline: none;
        caret-color: #fff;
        font-size: 22px;

        &:focus{
            z-index: 3;
        }
    }


`;