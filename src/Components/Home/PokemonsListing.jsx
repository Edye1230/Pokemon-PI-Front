import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionPrevPage, actionNextPage, actionActualPage } from "../../Redux/actions";
//import styled from 'styled-components';

import "./PokemonsListing.css"
import loading from "./pikachu.gif";

const PokemonsListing = () => {
    
    const stateReducer = useSelector((estado) => estado.getHomePokemons);
    const stateHome = useSelector((estado) => estado.getHomePokemons.pokemonss);
    const statePage = useSelector((estado) => estado.pagination);
    const dispatch = useDispatch();
    let renderHome;

    renderHome = stateHome.map((i) => {
        return ( 
        <div id="item" key={i.id}>

            <p>{i.name}</p>

            <div id="container_item_img">
            <div id="item_img">
                <Link to={`../pokemondetail/${i.id}`}>
                    <img src={i.img_url} alt="Sin imagen" width="125px"/>
                </Link>
            </div>
            </div>

            <div id="item_details">
                {i.types.map(i => <span id="span_types" key={i}>{i}</span>)}
            </div> 
        </div>
        )
    });

    let cantidad;
    if(renderHome[0]) cantidad = Math.ceil(renderHome.length / 12);
    let paginas = [];

    const prevPage = () => {
        if(statePage !== 0) dispatch(actionPrevPage());
      };
    
    const nextPage = () => {
        if (renderHome[0]){
            if(statePage < renderHome.length - 12) dispatch(actionNextPage());
        }
    };

    for (let i = 0; i < cantidad; i++) {
        paginas.push(<button id="boton_pagination" key={i+1} onClick={() => {dispatch(actionActualPage(12*i))}}> {i + 1} </button>)
      };
    
    let carga;
    let btnsig = false;;
    if (stateReducer.clear_filters.length === 0) carga = "Cargando...";
    if (stateReducer.pokemonss.length === 0 && stateReducer.clear_filters.length > 0) carga = "Sin resultados";
    if ((renderHome.length - statePage) < 12) btnsig = true;

    return (renderHome[0] ? <> 
    
        <div id="buttons-container">
            <div id="paginas">{paginas.length > 1 ? paginas : false}</div>
        </div>

        <div className="listing-container">
            {renderHome.slice(statePage, statePage + 12)}
        </div>

        <div id="buttons-container">
            <div id="sig-ant-buttons">
                {statePage !== 0 ? <button id="boton_pagination" onClick={prevPage}>Anterior</button> : <button id="boton_pagination" disabled={true}>Anterior</button> }
                {renderHome.length < 12 ? <button id="boton_pagination" disabled={true} onClick={nextPage}>Siguiente</button>: <button id="boton_pagination" disabled={btnsig} onClick={nextPage}>Siguiente</button>}
            </div>
        </div>
        <br />
      </> : 
      
      <div className="container-loading">
        { carga === "Cargando..." ? <img id="photo_loading_home" src={loading} alt=""/> : carga}
      </div>

      )
};

export default PokemonsListing;

/*
<p>{i.stats_attack}</p>
<p>{i.stats_speed}</p>
{i.types ? i.types.map(i=> <span id="span_types" key={i}>{i}</span>) : ""}

*/