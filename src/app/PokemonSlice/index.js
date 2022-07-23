import { createSlice } from "@reduxjs/toolkit";
import { getPokemonByName } from "../../service/getPokemonByName";

const INITIAL_STATE = [];

export const PokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState: INITIAL_STATE,
    reducers:{
        getPokemon:  (state, action)=>{
            state.push()
        }
    }
})

export const { getPokemon } = PokemonSlice.actions;
export default PokemonSlice.reducer;