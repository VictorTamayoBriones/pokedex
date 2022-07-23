import axios from "axios";

export const getPokemonByName = async (name) =>{
    try{
        const res = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return res.data;
    }catch(err){
        let e = err.response.data
        console.log(e);
        new Toast({
            message: e,
            type: 'danger'
        });
    }
}