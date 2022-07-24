import React, { useState } from 'react';

export const CurrentPokemonContext = React.createContext();

export const CurrentPokemonProvider = ({children}) => {

    const [currentPokemon, setCurrentPokemon]=useState({});
    const [isLoading, setIsLoading]=useState(false);

    return(
        <CurrentPokemonContext.Provider value={{ currentPokemon, setCurrentPokemon, isLoading, setIsLoading }} >
            {children}
        </CurrentPokemonContext.Provider>
    )

}