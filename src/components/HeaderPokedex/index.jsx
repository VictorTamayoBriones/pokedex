import React from 'react';
import { Header, SVGBody, SVGHeader } from "./style"
import Hader from '../../assets/header.svg';
import Body from '../../assets/Pokedex-body.svg';

export const HeaderPokedex = () =>{
    return(
        <Header>
            <SVGHeader src={ Hader } />
        </Header>
    )
}