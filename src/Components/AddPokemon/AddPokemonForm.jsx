import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { actionPostPokemon, actionGetTypes } from "../../Redux/actions"
import "./AddPokemon.css"

const AddDogForm = () => {
    
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
        const P1 = Promise.resolve(dispatch(actionPostPokemon(newPokemon)));
        P1.then(window.location.href="/added");
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
        if (newPokemon.img_url.length > 0) if (!newPokemon.img_url.includes("http")) errors.img_url = "Url no válida";
        
        if (!newPokemon.name || !newPokemon.stats_hp || !newPokemon.stats_attack || !newPokemon.stats_defense || !newPokemon.stats_speed || !newPokemon.weight || !newPokemon.height || !newPokemon.img_url) errors.empty = true;
        if (newPokemon.types.length === 0) errors.types = "Se requiere al menos un tipo";

    };
    
    validacion();

    console.log(errors);

    const submitHandler = () => {
        if (Object.keys(errors).length === 0) {
            postPokemon();
        } else {
            alert("Complete los campos correctamente por favor")
        }
    };

    console.log(newPokemon);

    return (
        <div id="addpokemon">

            <h2 id="addpokemon-h1">Añadir Pokemon</h2> <br />

            <form onSubmit = { e => e.preventDefault() }
                  onChange = { formOnChangeHandler } >
            
                <label> Nombre: </label> 
                <input id="iptform" name="inputName" type="text" placeholder="" required={true}/> 
                <span>{errors.name}</span> <br/> 
                <label>Vida: </label>
                <input id="iptform" name="inputHP" type="number" placeholder="" required={true}/> 
                <span>{errors.stats_hp}</span> <br/>
                <label>Ataque:</label>
                <input id="iptform" name="inputAttack" type="number" placeholder="" required={true}/> 
                <span>{errors.stats_attack}</span> <br/>
                <label>Defensa:</label>
                <input id="iptform" name="inputDefense" type="number" placeholder="" required={true}/> 
                <span>{errors.stats_defense}</span> <br/>
                <label>Velocidad:</label>
                <input id="iptform" name="inputSpeed" type="number" placeholder="" required={true}/> 
                <span>{errors.stats_speed}</span> <br/>
                <label>Peso:</label>
                <input id="iptform" name="inputWeight" type="number" placeholder="" required={true}/> 
                <span>{errors.weight}</span> <br/>
                <label>Altura:</label>
                <input id="iptform" name="inputHeight" type="number" placeholder="" required={true}/> 
                <span>{errors.height}</span> <br/>
                <label>Imagen:</label>
                <input id="iptform"  name="inputImageUrl" type="text" placeholder="http://"required={true}/> 
                <span>{errors.img_url}</span> <br/>

                <label>Tipos:</label>
                    <select id="sgcss" name="selectTypes">
                        <option disabled={false} value={"Seleccionar"}>Seleccionar</option>
                        {stateTypes ? stateTypes.map(i=><option key={i.id} value={i.name}>{i.name}</option>) : ""}
                    </select> 
                
                {typesFiltered.map(i=><span key={i}id="selected-types">{i}</span>)}
                <span>{/*errors.types*/}</span> <br/>
                <br />
                <button id="landing-btn" type="submit" disabled={errors.name ? false : false} onClick={submitHandler}> Enviar </button>
                <span>{errors.empty}</span>
            
            </form>
      </div>

    );
};

export default AddDogForm;

/*

Ruta de creación: debe contener

[ ] Un formulario controlado con JavaScript con los campos mencionados en el detalle del Pokemon
[ ] Posibilidad de seleccionar/agregar más de un tipo de Pokemon
[ ] Botón/Opción para crear un nuevo Pokemon
Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre del Pokemon no pueda contener caracteres numéricos, que la altura no pueda ser superior a determinado valor, etc.
*/