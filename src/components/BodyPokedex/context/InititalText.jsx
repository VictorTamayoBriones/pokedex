import React, { useEffect, useState } from 'react'

export const InitialTextContext = React.createContext();

export const InitialTextProvider = ({children}) =>{

    const [showText, setShowText]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setShowText(false);
        }, 2500)
    }, [])

    return(
        <InitialTextContext.Provider value={{showText}} >
            {children}
        </InitialTextContext.Provider>
    )
}