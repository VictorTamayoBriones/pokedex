import { Speaker } from "./style"
import { useContext, useEffect, useState } from "react"
import { CurrentPokemonContext } from '../../context/currentPokemon';

export const Bocina = () =>{
    const { currentPokemon:{abilities, name} } = useContext(CurrentPokemonContext)
    const voices = window.speechSynthesis.getVoices();

    const msg = new SpeechSynthesisUtterance();
    msg.voice = voices.filter(voice => voice.lang === 'es-MX' && voice.name === 'Paulina')[0];
    msg.pitch = 1;
    msg.rate = .8;
    msg.volume = 1;
    msg.text = `El es: ${name}, Habilidades: ${abilities?.map(a=>a.ability.name)}`;
    
    useEffect(()=>{
        if( name != undefined ){
            try{
                window.speechSynthesis.speak(msg);
            }catch(err){
                alert(err);
            }
        }
    }, [name])

    return(
        <Speaker>
        </Speaker>
    )

}