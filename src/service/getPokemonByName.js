import axios from "axios";

export const getPokemonByName = async (name) =>{
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return res.data;
}