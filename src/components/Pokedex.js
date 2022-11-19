import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <div className="pokedex">
      {loading ? (
        <div>Carregando</div>
      ) : (
        <div className="pokedex-wrap">
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemon key={index} pokemon={pokemon} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
