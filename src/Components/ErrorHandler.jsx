import "./ErrorHandler.css"
import error404 from "./error.png"
import { Link } from "react-router-dom";

const ErrorHandler = () => {
    return(
        <div id="errorhandler">
            <p id="p-error">Página no encontrada</p><br />
            <img src={error404} alt="Error 404" /><br />
            <Link id="landing-btn" to="../home">Ir al Inicio</Link><br />
        </div>
    );
};

export default ErrorHandler;