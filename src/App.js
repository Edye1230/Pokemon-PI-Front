import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail"
import AddPokemonForm from "./Components/AddPokemon/AddPokemonForm"
import Added from "./Components/AddPokemon/Added";
import ErrorHandler from "./Components/ErrorHandler";
import { Header, Footer } from "../src/Components/Header-Footer/HeaderFooter"

import "./App.css"

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/pokemondetail/:idpokemon" element={<PokemonDetail/>} />
          <Route path="/addpokemon" element={<AddPokemonForm/>} />
          <Route path="/added" element={<Added/>} />
          <Route path="*" element={<ErrorHandler/>} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
