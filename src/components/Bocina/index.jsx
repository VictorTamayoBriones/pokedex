import { Speaker } from "./style"
import { useContext, useEffect, useState } from "react"
import { CurrentPokemonContext } from '../../context/currentPokemon';

export const Bocina = () =>{
    const { currentPokemon } = useContext(CurrentPokemonContext)
    // const [abilities, setAbilities]=useState();
    

    const msg = new SpeechSynthesisUtterance();
    msg.text = `El es ${currentPokemon.name}, Habilidades pendientes`;

    useEffect(()=>{
        if( currentPokemon.name != undefined ){
            // currentPokemon.abilities.forEach(a=>{
            //     setAbilities([...abilities, a.ability.name]);
            // })        
            window.speechSynthesis.speak(msg);
        }
    }, [currentPokemon.name]);
    return(
        <Speaker>

        </Speaker>
    )

}