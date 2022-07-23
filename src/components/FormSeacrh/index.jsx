import { useContext, useRef, useState } from "react"
import { getRandom } from "../../helpers/getRandom";
import { getPokemonByName } from "../../service/getPokemonByName";
import { CurrentPokemonContext } from "../BodyPokedex/context/CurrentPokemon";
import { Form, InputContainer } from "./style"

export const FormSearch = () => {
    const refInput = useRef();
    const { setCurrentPokemon, setIsLoading } = useContext(CurrentPokemonContext);
    const [pokemonName, setPokemonName] = useState('');

    const handleChange = ({target:{value}}) => setPokemonName(value);

    const handleClick = (e) =>{
        e.preventDefault();

        if( e.target.name === 'search' ){

            setIsLoading(true);

            (async()=>{
                const data = await getPokemonByName(pokemonName.toLowerCase());
                setCurrentPokemon(data);
                setIsLoading(false);
            })();

        }else if( e.target.name === 'random' ){

            setIsLoading(true);
            const id = getRandom();
            (async()=>{
                const data = await getPokemonByName(id);
                setCurrentPokemon(data);
                setIsLoading(false);
            })();

        }else if( e.target.name === 'clean' ){ setCurrentPokemon({}) }
        
        setPokemonName('');
        refInput.current.blur();
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsLoading(true);

        (async()=>{
            const data = await getPokemonByName(pokemonName.toLowerCase());
            setCurrentPokemon(data);
            setIsLoading(false);
        })();

        setPokemonName('');
        refInput.current.blur();
    }

    return(
        <Form onSubmit={ handleSubmit } >
            <InputContainer>
                <label htmlFor="pokeName">Search a pokemon</label>
                <input type="text" name='pokeName' value={pokemonName} onChange={ handleChange }  ref={refInput}/>
            </InputContainer>
            

            <div className="buttons">
                <button onClick={handleClick} name='search' >Search</button>
                <button onClick={handleClick} name='random' >Random</button>
                <button onClick={handleClick} name='clean' >Clean</button>
            </div>
        </Form>
    )
}