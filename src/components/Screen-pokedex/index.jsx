import { useContext } from "react"
import { Container, Screen } from "./style"
import { InitialTextContext } from "../BodyPokedex/context/InititalText"
import { CurrentPokemonContext } from "../BodyPokedex/context/CurrentPokemon"

export const ScreenPokedex = () =>{

    const {showText, deleteText}=useContext(InitialTextContext)
    const { currentPokemon, isLoading } = useContext(CurrentPokemonContext);

    return(
        <Container>
            <Screen showText={ showText } deleteText={ deleteText } >
                <h1>My Pokédex</h1>

                { isLoading ? <p>Loading...</p> : ''}

                { currentPokemon === false ? '' : <img src={currentPokemon?.sprites?.front_default} alt="" />  }
            </Screen>
        </Container>
    )
}