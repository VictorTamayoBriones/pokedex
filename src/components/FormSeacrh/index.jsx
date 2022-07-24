import { useContext, useRef, useState } from "react"
import { CurrentPokemonContext } from "../../context/currentPokemon";
import { getRandom } from "../../helpers/getRandom";
import { getPokemonByName } from "../../service/getPokemonByName";
import { Form, InputContainer } from "./style"

export const FormSearch = () => {
    const refInput = useRef();

    const { setCurrentPokemon, setIsLoading } = useContext(CurrentPokemonContext);
    const [pokemonName, setPokemonName] = useState('');

    const handleChange = ({target:{value}}) => setPokemonName(value);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
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

    const handleClick = (e) =>{
        e.preventDefault();
        setIsLoading(true);

        if(e.target.name === 'random'){

            (async()=>{
                setCurrentPokemon(await getPokemonByName(getRandom()));
                setIsLoading(false);
            })();

        }
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
                <button name='clean' onClick={()=>setCurrentPokemon({})} >Clean</button>
            </div>
        </Form>
    )
}