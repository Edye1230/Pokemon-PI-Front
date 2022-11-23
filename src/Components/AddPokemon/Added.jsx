import React from "react";
import { Link } from "react-router-dom";

const Added = () => {
    return (
        <div id="addpokemon">
            <h1>Pokemon añadido correctamente</h1>
            <Link id="landing-btn" to="/addpokemon">¿Añadir otro?</Link> <br />
            <a id="landing-btn" href="/home">Ir al listado</a>
        </div>
    )
}

export default Added;