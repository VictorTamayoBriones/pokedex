import { useContext, useState } from "react"
import { getPokemonByName } from "../../service/getPokemonByName";
import { CurrentPokemonContext } from "../BodyPokedex/context/CurrentPokemon";
import { Form, InputContainer } from "./style"

export const FormSearch = () => {

    const { setCurrentPokemon, setIsLoading } = useContext(CurrentPokemonContext);
    const [pokemonName, setPokemonName] = useState('');

    const handleChange = ({target:{value}}) => setPokemonName(value);

    const handleClick = (e) =>{
        e.preventDefault();

        if( e.target.name === 'search' ){

            setIsLoading(true);

            (async()=>{
                const data = await getPokemonByName(pokemonName);
                setCurrentPokemon(data);
                setIsLoading(false);
            })();
        }

        setPokemonName('');
    }

    return(
        <Form>
            <InputContainer>
                <label htmlFor="pokeName">Search a pokemon</label>
                <input type="text" name='pokeName' value={pokemonName} onChange={ handleChange } />
            </InputContainer>
            

            <div className="buttons">
                <button onClick={handleClick} name='search' >Search</button>
                <button onClick={handleClick} name='random' >Random</button>
                <button onClick={handleClick} name='clean' >Clean</button>
            </div>
        </Form>
    )
}