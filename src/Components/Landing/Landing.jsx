import { Link } from "react-router-dom";
import MewLanding from "./mew.png";
import "./Landing.css";
import { Header, Footer } from "../Header-Footer/HeaderFooter";


const Landing = () => {
  return (

    <div class="Landing">
        
        <Header></Header>

        <div className="land-article">
            {/* LEFT SIDE */}
            <div className="landing-left">
                <h1 id="title_h1">Pokedex App</h1>
                <h5>Explora +500 Pokemons, crea los tuyos, filtra y
                    ordena por tipo, ataque y más en un solo sitio.
                </h5>
                <div className="land-botones">
                    <Link id="landing-btn" to="home">Explorar</Link>
                    <Link id="landing-btn" to="addpokemon">Crea el tuyo</Link>
                </div>
            </div>
            {/* RIGTH SIDE */}
            <div className="landing-rigth">
                <img class="poke_photo"  src="https://imagenes.atresplayer.com/atp/clipping/cmsimages02/2022/10/28/64C79A5A-9DF4-457F-877F-91B15D9752FE//720x540.jpg" alt="mew" width="350px" />
            </div>
        </div>


        {/*OTROS*/}

        <Footer></Footer>

    </div>

  );
};

export default Landing;
