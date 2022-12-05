import "./HeaderFooter.css"
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <div className="poke_header">
            <div id="poke-navbar">
            <Link id="poke-item-navbar" to='/'>Home</Link>
            <Link id="poke-item-navbar" to='/home'>Listado</Link>
            <Link id="poke-item-navbar" to="/addpokemon">Create</Link>
            <Link id="poke-item-navbar" to ="/about">About</Link>
            </div>
        </div>
    );
};

export const Footer = () => {
    return(
        <div className="poke_footer">
            <p>© 2022 Edye QS | All rights reserved.</p>
         </div>
    );
};