import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  return (
    <ListContainer>
      {PokemonList.map(pokemon => (
        <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAddPokemon={onAddPokemon}
            isSelected={false}
          />
      ))}
    </ListContainer>
  );
};

export default PokemonList;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ddd;
  border_radius: 10px;
`;
