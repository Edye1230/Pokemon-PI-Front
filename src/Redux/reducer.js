import { combineReducers } from "redux"; 
import { pokemonsReducer, pokemonByIdReducer, paginationReducer } from "./actions";

const reducer = combineReducers({
    getHomePokemons: pokemonsReducer,
    pokemonByID: pokemonByIdReducer,
    pagination: paginationReducer
});

export default reducer;