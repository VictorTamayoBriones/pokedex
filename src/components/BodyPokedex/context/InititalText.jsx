import React, { useEffect, useState } from 'react'

export const InitialTextContext = React.createContext();

export const InitialTextProvider = ({children}) =>{

    const [showText, setShowText]=useState(true);
    const [deleteText, setDeleteText]=useState(false);

    useEffect(()=>{

        setTimeout(()=>{
            setShowText(false);

            setTimeout(()=>{
                setDeleteText(true);
            }, 1200)

        }, 2500)


    }, [])

    return(
        <InitialTextContext.Provider value={{showText, deleteText}} >
            {children}
        </InitialTextContext.Provider>
    )
}