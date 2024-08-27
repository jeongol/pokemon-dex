import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

function Dex() {
  const defaultValue = [null, null, null, null, null, null];
  const [selectedPokemon, setSelectedPokemon] = useState(defaultValue);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.indexOf) {
      alert("이미 선택된 포켓몬 입니다!");
      return;
    }
    const updatedList = [...selectedPokemon, pokemon];
    if (updatedList.length > 5) {
      alert("최대 6개의 포켓몬만 선택할 수 있습니다!");
      return;
    }
    setSelectedPokemon(updatedList);
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
