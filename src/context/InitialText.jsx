import React, { useEffect, useState } from 'react';

export const InitialTextContext = React.createContext();

export const InitialTextProvider = ({children}) =>{

    const[textIsVisible, setTextIsVisible]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setTextIsVisible(false);
        },2500)
    },[])

    return(
        <InitialTextContext.Provider value={{ textIsVisible, setTextIsVisible }} >
            {children}
        </InitialTextContext.Provider>
    )
}