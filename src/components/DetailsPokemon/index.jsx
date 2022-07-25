import { ArrowDown, ArrowUp, ContaineDetails, Details } from "./style"
import { useContext, useState } from "react"
import { CurrentPokemonContext } from '../../context/currentPokemon';
import { Container, Screen } from "../Screen-pokedex/style";

export const DetailsPokemon = () =>{

    const { currentPokemon } = useContext(CurrentPokemonContext);
    const [showDetails, setShowDetails]=useState(false);
    
    return(
        <ContaineDetails showArrow={Object.keys(currentPokemon).length} >
            {
                showDetails === true && Object.keys(currentPokemon).length != 0 ?

                <ArrowDown onClick={ ()=> setShowDetails(!showDetails) } /> :
                <ArrowUp onClick={ ()=> setShowDetails(!showDetails) } />
            }
            <Details showDetails={ showDetails } >
                <Container>
                    <Screen color="#35CFFF">
                        <div className="abilities">
                            <h3>Abilities</h3>
                            <ul>
                                {
                                    currentPokemon?.abilities?.map((ability, i)=>(
                                        <li key={`ability${i}`} >{ability.ability.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Screen>
                </Container>
            </Details>
        </ContaineDetails>
    )
}