const axios = require('axios').default;

export const GET_TYPES = "GET_TYPES";
export const GET_HOME_POKEMONS = "GET_HOME_POKEMONS";
export const GET_SEARCH_POKEMONS = "GET_SEARCH_POKEMONS";
export const FILTER_BY = "FILTER_BY";
export const NEW_FILTER = "NEW_FILTER";
export const ORDER_BY = "ORDER_BY";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const REMOVE_POKEMON_BY_ID = "REMOVE_POKEMON_BY_ID";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const POST_POKEMON = "POST_POKEMON";
export const PREV_PAGE = "PREV_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const ACTUAL_PAGE = "ACTUAL_PAGE";

export const actionGetTypes = () => {
    return function (dispatch) {
        return axios.get("/types").then((res) => {
                dispatch({type: GET_TYPES, payload: res.data})
            })
}};

export const actionGetHomePokemons = () => {
    return function (dispatch) {
        return axios.get("/pokemons")
            .then((res) => {
                dispatch({type: GET_HOME_POKEMONS, payload: res.data})
            })     
}};

export const actionGetSearchPokemons = (name) => {
    return function (dispatch) {
        return axios.get(`/pokemon?name=${name}`)
            .then((res) => {
                dispatch({type: GET_SEARCH_POKEMONS, payload: res.data})
            })
}};

export const actionFilterBy = (filters) => ({
    type: FILTER_BY, 
    payload: filters
});

export const actionNewFilter = (filters) => ({
    type: NEW_FILTER, 
    payload: filters
});

export const actionOrder = (order) => ({
    type: ORDER_BY, 
    payload: order
});

export const actionClearFilters = () => ({
    type: CLEAR_FILTERS, 
});

export const actionGetPokemonByID = (pokemonId) => {
    return function (dispatch) {
        return axios.get(`/pokemon/${pokemonId}`)
            .then((res) => {
                dispatch({type: GET_POKEMON_BY_ID, payload: res.data})
            })
}};

export const actionRemovePokemonByID = () => ({
  type: REMOVE_POKEMON_BY_ID
});

export const actionPostPokemon = (data) => {
    return function (dispatch) {
        return axios.post(`/pokemon`, data)
        .then(() => {
            dispatch({type: POST_POKEMON})
        })
    }
};

export const actionPrevPage = () => ({
    type: PREV_PAGE,
  });
  
  export const actionNextPage = () => ({
    type: NEXT_PAGE,
  });

  export const actionActualPage = (num) => ({
    type: ACTUAL_PAGE,
    payload: num
  });

const initialState = {
    pokemonss : [], //tres fire
    filtered: [], //inicial
    unfiltered: [], //inicial
    clear_filters: [], //inicial
};

export const pokemonsReducer = (estado = initialState, accion) => {
    
    switch (accion.type) {
        case GET_TYPES:
            return {...estado, types: accion.payload}
        case GET_HOME_POKEMONS:
            console.log("GET_HOME_POKEMONS");
            return {...estado, pokemonss: accion.payload, filtered: accion.payload, unfiltered: accion.payload, clear_filters: accion.payload };
        case GET_SEARCH_POKEMONS:
            console.log("GET_SEARCH_POKEMONS");
            return {...estado, pokemonss: accion.payload, filtered: accion.payload, unfiltered: accion.payload};

        case FILTER_BY:
            console.log("FILTER_BY");
            console.log(accion.payload);
            let filtrado = estado.filtered;

            if(accion.payload.origen === "3") filtrado = filtrado.filter(i => i.id.length > 5)
            if(accion.payload.origen === "2") filtrado = filtrado.filter(i => i.id < 9999)

            if(accion.payload.tipo !== "allTypes" && accion.payload.tipo) filtrado = filtrado.filter(i=> i.types.includes(accion.payload.tipo))

            if(accion.payload.atack50 === "+5") filtrado = filtrado.filter(i=>i.stats_attack > 50 )
            if(accion.payload.atack50 === "-5") filtrado = filtrado.filter(i=>i.stats_attack < 50 )

            return {...estado, pokemonss: filtrado}

        case ORDER_BY:
            console.log("ORDER_BY");
            console.log(accion.payload);
            let unfilteredOrder = estado.pokemonss;
            let filteredOrder = estado.pokemonss;

            if (accion.payload.name === "asc_name") {
                unfilteredOrder = [...estado.unfiltered].sort((prev, next) => {
                    if(prev.name > next.name) return 1
                    if(prev.name < next.name) return -1
                return 0})
                filteredOrder = [...estado.pokemonss].sort((prev, next) => {
                    if(prev.name > next.name) return 1
                    if(prev.name < next.name) return -1
                return 0})
                    }
                
            if(accion.payload.name === "dsc_name") {
                unfilteredOrder = [...estado.unfiltered].sort((prev, next) => {
                    if(prev.name < next.name) return 1
                    if(prev.name > next.name) return -1
                return 0})
                filteredOrder = [...estado.pokemonss].sort((prev, next) => {
                    if(prev.name < next.name) return 1
                    if(prev.name > next.name) return -1
                return 0})
            }

            if (accion.payload.name === "asc_attack") {
                unfilteredOrder = [...estado.unfiltered].sort((prev, next) => {
                    if(prev.stats_attack < next.stats_attack) return 1
                    if(prev.stats_attack > next.stats_attack) return -1
                return 0})
                filteredOrder = [...estado.pokemonss].sort((prev, next) => {
                    if(prev.stats_attack < next.stats_attack) return 1
                    if(prev.stats_attack > next.stats_attack) return -1
                return 0})
            }
                
            if(accion.payload.name === "dsc_attack") {
                unfilteredOrder = [...estado.unfiltered].sort((prev, next) => {
                    if(prev.stats_attack > next.stats_attack) return 1
                    if(prev.stats_attack < next.stats_attack) return -1
                return 0})
                filteredOrder = [...estado.pokemonss].sort((prev, next) => {
                    if(prev.stats_attack > next.stats_attack) return 1
                    if(prev.stats_attack < next.stats_attack) return -1
                return 0})
            }
        
            return {...estado, pokemonss: filteredOrder, filtered: unfilteredOrder}
                
        case CLEAR_FILTERS:
            console.log("CLEAR_FILTERS");
            return {...estado, pokemonss: estado.clear_filters, filtered: estado.clear_filters, unfiltered: estado.clear_filters}

        default:
            return estado;
    }
};

export const pokemonByIdReducer = (estado = {}, accion) => {
    switch (accion.type) {
        case GET_POKEMON_BY_ID:
            return {...estado, ...accion.payload};
        case REMOVE_POKEMON_BY_ID:
            return {};
        default:
            return estado;
    }
};

export const paginationReducer = (estado = 0, accion) => {
    switch (accion.type) {
        case ACTUAL_PAGE:
            return accion.payload;
        case PREV_PAGE:
            return estado - 12;
        case NEXT_PAGE:
            return estado + 12;
        default:
            return estado;
    }
};