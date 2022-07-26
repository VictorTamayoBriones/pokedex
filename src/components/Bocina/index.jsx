import { Speaker } from "./style"
import { useContext, useEffect, useState } from "react"
import { CurrentPokemonContext } from '../../context/currentPokemon';

export const Bocina = () =>{
    const { currentPokemon:{abilities, name} } = useContext(CurrentPokemonContext)

    const msg = new SpeechSynthesisUtterance();
    msg.text = `El es ${name}, Habilidades: ${abilities?.map(a=>a.ability.name)}`;
    
    
    useEffect(()=>{
        if( name != undefined ){
            window.speechSynthesis.speak(msg);
        }
    }, [name])

    return(
        <Speaker>

        </Speaker>
    )

}