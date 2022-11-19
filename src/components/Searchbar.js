import React, {useState} from "react";
import { searchPokemon } from "../api"

const Searchbar = () => {
  const [search, setSearch] = useState("dito");
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  }

  const onSearchHandler = async (pokemon) => {
    const pokemonData = await searchPokemon(pokemon);
    setPokemon(pokemonData)
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input type="text" placeholder="Search Pokemon" onChange={onChangeHandler}/>
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler} >Buscar</button>
      </div>
      {pokemon ? (
        <div>
          <span>{pokemon.name}</span>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : null}
    </div>
  );
}

export default Searchbar;