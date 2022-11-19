import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (<div className="card">
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <span>{pokemon.name}</span>
  </div>)
}

export default Pokemon;