import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PokemonsListing from "./PokemonsListing";
import {
  actionGetHomePokemons,
  actionGetSearchPokemons,
  actionFilterBy,
  actionOrder,
  actionRemovePokemonByID,
  actionClearFilters,
  actionActualPage,
  actionGetTypes,
} from "../../Redux/actions";

import "./PokemonsListing.css";

import { Header, Footer } from "../Header-Footer/HeaderFooter";

let buscado;
let filtros = { origen: "", tipo: "", speed: "" };
let orders = { name: "", attack: "" };

const Home = () => {
  const stateHome = useSelector((estado) => estado.getHomePokemons.pokemonss);
  const stateTypes = useSelector((estado) => estado.getHomePokemons.types);

  const dispatch = useDispatch();

  const renderPokemons = () => {
    if (!stateHome[0]) {
      dispatch(actionGetHomePokemons());
      dispatch(actionGetTypes());
    }
    dispatch(actionRemovePokemonByID());
  };

  useEffect(() => {
    renderPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let clearHandlerForm = (e) => {
    e.preventDefault();

    e.currentTarget.origenSelect.value = "1";
    e.currentTarget.typesSelect.value = "allTypes";
    e.currentTarget.orderNameSelect.value = "def";
    e.currentTarget.orderAttackSelect.value = "def";
    //e.currentTarget.newFilterSelect.value = "xx";

    filtros = { origen: "", tipo: "", speed: "", atack50: "" };
    orders = { name: "", attack: "" };
    dispatch(actionActualPage(0));
    dispatch(actionClearFilters());
  };

  const inputSearchHandler = (e) => {
    console.log(e.currentTarget.value);
    filtros = { origen: "", tipo: "", speed: "", atack50: "" };
    orders = { name: "", attack: "" };
    dispatch(actionActualPage(0));
    buscado = e.currentTarget.value;
  };

  let filtersHandler = (e) => {
    console.log(e.currentTarget.value);

    if (e.currentTarget.value.length === 1) {
      filtros.origen = e.currentTarget.value;
    }
    if (e.currentTarget.value.length > 2) {
      filtros.tipo = e.currentTarget.value;
    }
    if (e.currentTarget.value.length === 2) {
      filtros.atack50 = e.currentTarget.value;
    }
    /*if(e.currentTarget.value.length === 2) {
        filtros.speed = e.currentTarget.value
      }*/
    dispatch(actionActualPage(0));
    dispatch(actionFilterBy(filtros));
  };

  let ordersHandler = (e) => {
    console.log(e.currentTarget.value);
    dispatch(actionActualPage(0));

    orders.name = e.currentTarget.value;
    dispatch(actionOrder(orders));
  };

  return (
    <div className="Home_JSX">
      <Header />

      <div className="SubHome">

        <div className="SearchBar"><br />
          <span id="span_label">Buscar Pokemon:</span>
          <input type="text" onChange={inputSearchHandler} />
          <button id="button_buscar" onClick={() => dispatch(actionGetSearchPokemons(buscado))}>
            Buscar
          </button>
        </div>

      <div className="divv_form_filters">

        <form onSubmit={clearHandlerForm} className="form_select_filters">
          <span id="span_label"> Origen: </span>
          <select className="select_filter" name="origenSelect" onChange={filtersHandler}>
            <option disabled>Api or DB</option>
            <option value="1">Todos</option>
            <option value="2">Existentes</option>
            <option value="3">Creados</option>
          </select>

          <span id="span_label"> Tipos: </span>
          <select className="select_filter" name="typesSelect" onChange={filtersHandler}>
            <option disabled>Tipos</option>
            <option value="allTypes">Todos</option>
            {stateTypes
              ? stateTypes.map((i) => (
                  <option key={i.id} value={i.name}>
                    {i.name}
                  </option>
                ))
              : ""}
          </select>
                
          <span id="span_label">Ataque +-50:</span>
          <select className="select_filter" name="filterAttack50" onChange={filtersHandler}>
            <option value="dex">Seleccionar</option>
            <option value="+5"> + 50 </option>
            <option value="-5"> - 50 </option>
          </select><br /><br />
          
          <span id="span_label"> Ordenar x Nombre: </span>
          <select className="select_filter" name="orderNameSelect" onChange={ordersHandler}>
            <option value="def">Seleccionar</option>
            <option value="asc_name">A - Z</option>
            <option value="dsc_name">Z - A</option>
          </select>

          <span id="span_label"> Ordenar x Ataque: </span>
          <select className="select_filter" name="orderAttackSelect" onChange={ordersHandler}>
            <option value="def">Seleccionar</option>
            <option value="asc_attack">Mayor ataque</option>
            <option value="dsc_attack">Menor ataque</option>
          </select>
          <br /><br />
          <button id="clean_filters_button" type="submit">Limpiar filtros</button>

        </form>


        </div>
      </div>

      {<PokemonsListing />}

      <Footer />
    </div>
  );
};

export default Home;
