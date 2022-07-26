import { useContext, useRef, useState } from "react"
import { CurrentPokemonContext } from "../../context/currentPokemon";
import { getRandom } from "../../helpers/getRandom";
import { speakDetailsOnIphone } from "../../helpers/speakDetailsOnIphone";
import { getPokemonByName } from "../../service/getPokemonByName";
import { Form, InputContainer } from "./style"

export const FormSearch = () => {
    const refInput = useRef();

    const { currentPokemon, setCurrentPokemon, setIsLoading } = useContext(CurrentPokemonContext);
    const [pokemonName, setPokemonName] = useState('');

    const msg = new SpeechSynthesisUtterance();

    const handleChange = ({target:{value}}) => setPokemonName(value);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        window.speechSynthesis.speak(msg);
        
        if( pokemonName != '' ){
            setIsLoading(true);
    
            (async()=>{
                setCurrentPokemon(await getPokemonByName(pokemonName.toLocaleLowerCase()));
                setIsLoading(false);
            })();

            setPokemonName('');

            refInput.current.blur();
            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        }

    }

    const handleClick = (e) =>{
        e.preventDefault();
        setIsLoading(true);
        window.speechSynthesis.speak(msg);

        if(e.target.name === 'random'){

            (async()=>{
                setCurrentPokemon(await getPokemonByName(getRandom()));
                setIsLoading(false);

                
            })();

        }
    }

    const handleClean = () =>{
        setCurrentPokemon({})
    }

    return(
        <Form onSubmit={ handleSubmit } >
            <InputContainer>
                <label htmlFor="pokeName">Search a pokemon</label>
                <input type="text" name='pokeName' value={pokemonName} onChange={ handleChange }  ref={refInput}/>
            </InputContainer>
            <div className="buttons">
                <button type="submit" name='search' >Search</button>
                <button name='random' onClick={handleClick} >Random</button>
                <button name='clean' onClick={handleClean} >Clean</button>
            </div>
        </Form>
    )
}