import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { actionPostPokemon, actionGetTypes } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import "./AddPokemon.css"

import { Header, Footer } from "../Header-Footer/HeaderFooter";

const AddDogForm = () => {
    const navigate  = useNavigate();
    const nuevoPoke = useSelector((estado) => estado.new_pokemon);
    console.log(typeof nuevoPoke);
    const [newPokemon, setNewPokemon] = useState({
        name: "",
        stats_hp: 0,
        stats_attack: 0,
        stats_defense: 0,
        stats_speed: 0,
        weight: 0,
        height: 0,
        types : [],
        img_url: "",
    });

    const stateTypes = useSelector((estado) => estado.getHomePokemons.types);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(actionGetTypes())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const postPokemon = () => {
        dispatch(actionPostPokemon(newPokemon))
    };

    let typesFiltered = newPokemon.types.filter((item, i) => { return newPokemon.types.indexOf(item) === i})
    if(newPokemon.types[0] === "Seleccionar") newPokemon.types.shift();
    if(newPokemon.types.includes("Seleccionar")) newPokemon.types.pop();


    let formOnChangeHandler = (e) => {
        setNewPokemon({
            ...newPokemon, name: e.currentTarget.inputName.value,
                           stats_hp: e.currentTarget.inputHP.value,
                           stats_attack: e.currentTarget.inputAttack.value,
                           stats_defense: e.currentTarget.inputDefense.value,
                           stats_speed: e.currentTarget.inputSpeed.value,
                           weight: e.currentTarget.inputWeight.value,
                           height: e.currentTarget.inputHeight.value,
                           types: newPokemon.types.concat(e.currentTarget.selectTypes.value),
                           img_url: e.currentTarget.inputImageUrl.value})
    
    };

    /////////VALIDACIONES
    let errors = {}

    let validacion = () => {

        if (newPokemon.name.includes("@")) errors.name = "Caracteres especiales no permitidos";
        if (newPokemon.stats_hp < 0 || newPokemon.stats_hp > 200) errors.stats_hp = "Rango permitido (0 - 200)";
        if (newPokemon.stats_attack < 0 || newPokemon.stats_attack > 200) errors.stats_attack = "Rango permitido (0 - 200)";
        if (newPokemon.stats_defense < 0 || newPokemon.stats_defense > 200) errors.stats_defense = "Rango permitido (0 - 200)";
        if (newPokemon.stats_speed < 0 || newPokemon.stats_speed > 200) errors.stats_speed = "Rango permitido (0 - 200)";
        if (newPokemon.weight < 0 || newPokemon.weight > 2000) errors.weight = "Rango permitido (0 - 2000)";
        if (newPokemon.height < 0 || newPokemon.height > 50) errors.height = "Rango permitido (0 - 50)";
        if (newPokemon.img_url.length > 0) if (!newPokemon.img_url.includes("http")) errors.img_url = "Url no v??lida";
        
        if (!newPokemon.name || !newPokemon.stats_hp || !newPokemon.stats_attack || !newPokemon.stats_defense || !newPokemon.stats_speed || !newPokemon.weight || !newPokemon.height || !newPokemon.img_url) errors.empty = true;
        if (newPokemon.types.length === 0) errors.types = "Se requiere al menos un tipo";

    };
    
    validacion();

    console.log(errors);

    const submitHandler = () => {
        
        if (Object.keys(errors).length === 0) {
            postPokemon()
            setTimeout(()=> navigate('/added'), 1000)
        } else {
            alert("Complete los campos correctamente por favor")
        }
    };

    console.log(newPokemon);

    return (
        <div className="AddPokemon">

        <Header/>

            <div className="AddPokemonForm">

            <h2 id="addpokemon-h1">A??adir Pokemon</h2>

            <div className="formulario_create">

            <form onSubmit = { e => e.preventDefault() }
                  onChange = { formOnChangeHandler } >
            
                <label> Nombre: </label> 
                <input id="iptform" name="inputName" type="text" placeholder="" required={true}/> 
                <span>{errors.name}</span>
                <label>Vida: </label>
                <input id="iptform" name="inputHP" type="number" placeholder="" required={true}/> 
                <span>{errors.stats_hp}</span>
                <label>Ataque:</label>
                <input id="iptform" name="inputAttack" type="number" placeholder="" required={true}/> 
                <span>{errors.stats_attack}</span>
                <label>Defensa:</label>
                <input id="iptform" name="inputDefense" type="number" placeholder="" required={true}/> 
                <span>{errors.stats_defense}</span>
                <label>Velocidad:</label>
                <input id="iptform" name="inputSpeed" type="number" placeholder="" required={true}/> 
                <span>{errors.stats_speed}</span>
                <label>Peso:</label>
                <input id="iptform" name="inputWeight" type="number" placeholder="" required={true}/> 
                <span>{errors.weight}</span>
                <label>Altura:</label>
                <input id="iptform" name="inputHeight" type="number" placeholder="" required={true}/> 
                <span>{errors.height}</span>
                <label>Imagen:</label>
                <input id="iptform"  name="inputImageUrl" type="text" placeholder="http://"required={true}/> 
                <span>{errors.img_url}</span>

                <label>Tipos:</label>

                <div id="button_create">

                    <select id="sgcss" name="selectTypes">
                        <option disabled={false} value={"Seleccionar"}>Seleccionar</option>
                        {stateTypes ? stateTypes.map(i=><option key={i.id} value={i.name}>{i.name}</option>) : ""}
                    </select> 
                    <br /><br />
                </div>

                <div className="divv_selected_types">
                    {typesFiltered.map(i=><span key={i}id="selected-types">{i}</span>)}
                    <span>{/*errors.types*/}</span> <br/>
                    <br />
                    <span>{errors.empty}</span><br />
                </div>
                <div id="button_create">
                    <button id="landing-btn" type="submit" disabled={errors.name ? false : false} onClick={submitHandler}> Enviar </button>
                </div>
            </form>
            </div>
            </div>

            <Footer/>

      </div>

    );
};

export default AddDogForm;

/*

Ruta de creaci??n: debe contener

[ ] Un formulario controlado con JavaScript con los campos mencionados en el detalle del Pokemon
[ ] Posibilidad de seleccionar/agregar m??s de un tipo de Pokemon
[ ] Bot??n/Opci??n para crear un nuevo Pokemon
Es requisito que el formulario de creaci??n est?? validado con JavaScript y no s??lo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre del Pokemon no pueda contener caracteres num??ricos, que la altura no pueda ser superior a determinado valor, etc.
*/