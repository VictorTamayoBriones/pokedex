import { IconAB } from "@tabler/icons";
import { useContext } from "react";
import { CurrentPokemonContext } from "../../context/currentPokemon";
import { InitialTextContext } from "../../context/InitialText";
import { Container, Screen } from "./style"

export const ScreenPokedex = () =>{

    const { currentPokemon, isLoading } = useContext(CurrentPokemonContext);
    const { textIsVisible } = useContext(InitialTextContext);
    
    return(
        <Container>
            <Screen textIsVisible={ textIsVisible } isLoading={ isLoading } >
                <h1>My Pokédex</h1>
                <p>Loading...</p>
                {
                    Object.keys(currentPokemon).length === 0 ? '' :
                    <img 
                        src={ currentPokemon?.sprites?.front_default} alt="" /> 
                    
                }
                
            </Screen>
        </Container>
    )
}