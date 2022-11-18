import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { actionGetPokemonByID } from "../../Redux/actions";
import { Link } from "react-router-dom";
//import styled from 'styled-components';
import "./PokemonDetail.css"

import loading from "./pikachu.gif";

const PokemonDetail = () => {
    
    const { idpokemon } = useParams();
    const pokeElegido = useSelector((estado) => estado.pokemonByID);
    const dispatch = useDispatch();
    
    const renderPokemon = () => {
        dispatch(actionGetPokemonByID(idpokemon));
    }

    useEffect(() => {
        renderPokemon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(pokeElegido ? pokeElegido.id : false);

    return ( pokeElegido.id ? 
        <div className="container-detail"><br />

            <h1>Detalle del Pokemon</h1>

            <div id="pokemon-detail">
            <h2>Nombre: {pokeElegido.name}</h2>
            <img src={pokeElegido.img_url} alt="" width="150px"/>
                <p>ID: {pokeElegido.id}</p>
                <p>Vida: {pokeElegido.stats_hp}</p>
                <p>Ataque: {pokeElegido.stats_attack}</p>
                <p>Defensa: {pokeElegido.stats_defense}</p>
                <p>Velocidad: {pokeElegido.stats_speed}</p>
                <p>Peso: {pokeElegido.weight}</p>
                <p>Altura: {pokeElegido.height}</p>
                <p>Tipos:</p> {pokeElegido.types ? pokeElegido.types.map(i=> <p key={i}>{i}</p>) : false}
            </div>
            <br />
        <Link id="landing-btn" to={`../home/`} >Volver</Link>
        
        </div>

    : 
        <div className="container-loading">
            <img id="loading" src={loading} alt=""/>
        </div>

    );
};

export default PokemonDetail;



/*
[ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
[ ] Número de Pokemon (id)
[ ] Estadísticas (vida, ataque, defensa, velocidad)
[ ] Altura y peso
*/