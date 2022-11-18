import { Link } from "react-router-dom";
import MewLanding from "./mew.png";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
        <div className="landing-face">
            <div className="landing-left">
                <div className="landing-left-content">
                    <h1>Pokedex App</h1>
                    <h5>Explora +500 Pokemons, crea los tuyos, filtra y
                        ordena por tipo, ataque y más en un solo sitio.</h5>
                    <Link id="landing-btn" to="home">Explorar</Link>
                    <Link id="landing-btn" to="addpokemon">Crea el tuyo</Link>
                </div>
            </div>

            <div className="landing-rigth">
                <img src={MewLanding} alt="mew" width="350px" />
            </div>

        </div>

        <div className="info">
            <div id="info-content"> <p>React</p> </div>
            <div id="info-content"> <p>Redux</p> </div>
            <div id="info-content"> <p>Postgres</p> </div>
        </div>

    </div>
  );
};

export default Landing;
