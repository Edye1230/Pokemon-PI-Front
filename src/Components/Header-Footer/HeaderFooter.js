import "./HeaderFooter.css"
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <div className="header">
            <div id="navbar">
            <Link id="item-navbar" to='/'>Home</Link>
            <Link id="item-navbar" to={"/addpokemon"}>Create</Link>
            <Link id="item-navbar" to ={"/about"}>About</Link>
            </div>
        </div>
    );
};

export const Footer = () => {
    return(
        <div className="footer">
            <p>© 2022 Soy Henry | All rights reserved.</p>
         </div>
    );
};