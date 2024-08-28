import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

function Dex() {
  const defaultValue = [null, null, null, null, null, null];
  const [selectedPokemon, setSelectedPokemon] = useState(defaultValue);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length > 6) {
      alert("포켓몬은 최대 6개까지만 선택 될 수 있어요.");
    } else if (selectedPokemon.includes(pokemon)) {
      alert("이미 선택된 포켓몬 입니다!");
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };
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
