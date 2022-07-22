import { useState } from "react"
import { Form } from "./style"

export const FormSearch = () => {

    const [pokemonName, setPokemonName] = useState('');

    const handleChange = ({target:{value}}) => setPokemonName(value);
    return(
        <Form >

            <input type="text"  placeholder="Pikachu" name='pokeName' value={pokemonName} onChange={ handleChange } />

            <div className="buttons">
                <button>Search</button>
                <button>Random</button>
                <button>Clean</button>
            </div>
        </Form>
    )
}