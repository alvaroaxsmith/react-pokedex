import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { searchPokemon } from "./api";

function App() {

  const onSearchHandler = async (pokemon) => {
    const pokemonData = await searchPokemon(pokemon);
    console.log("pokemonData: ", pokemonData);
  }
  return (
    <div>
      <Navbar />
      <Searchbar
      onSearch={onSearchHandler}
      />
      <div className="App"></div>
    </div>
  );
}

export default App;
