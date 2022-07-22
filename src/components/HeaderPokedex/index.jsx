import React from 'react';
import { Header,SVGHeader } from "./style"
import Hader from '../../assets/header.svg';


export const HeaderPokedex = () =>{
    return(
        <Header>
            <SVGHeader src={ Hader } />
        </Header>
    )
}