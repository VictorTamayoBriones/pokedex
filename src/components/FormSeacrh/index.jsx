import { useState } from "react"
import { Form, InputContainer } from "./style"

export const FormSearch = () => {

    const [pokemonName, setPokemonName] = useState('');

    const handleChange = ({target:{value}}) => setPokemonName(value);
    return(
        <Form >
            <InputContainer>
                <label htmlFor="pokeName">Search a pokemon</label>
                <input type="text" name='pokeName' value={pokemonName} onChange={ handleChange } />
            </InputContainer>
            

            <div className="buttons">
                <button>Search</button>
                <button>Random</button>
                <button>Clean</button>
            </div>
        </Form>
    )
}