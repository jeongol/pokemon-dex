import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

import MOCK_DATA from "../mock";

function Dex() {
  const defaultValue = [null, null, null, null, null, null];
  const [selectedPokemon, setSelectedPokemon] = useState(defaultValue);

  const addPokemon = (pokemon) => {
    const poketArr = [...selectedPokemon, pokemon];
    setSelectedPokemon(poketArr);
  };

  const removePokemon = (pokemon) => {};

  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </div>
  );
}

export default Dex;
