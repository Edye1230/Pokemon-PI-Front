import "./ErrorHandler.css"
import error404 from "./error.png"
import { Link } from "react-router-dom";
import { Header, Footer } from "./Header-Footer/HeaderFooter";

const ErrorHandler = () => {
    return(
        <div className="ErrorHandler">
            <Header/>
                <div className="SubErrorHandler">
                    <h6 id="p-error">Página no encontrada</h6>
                    <img id="photo_error" src={error404} alt="Error 404" />
                    <Link id="landing-btn" to="../home">Ir al Inicio</Link>
                </div>
            <Footer/>
        </div>
    );
};

export default ErrorHandler;