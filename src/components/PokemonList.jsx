import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

function PokemonList({ pokemonList, onAddPokemon }) {
  console.log(pokemonList);
  return (
    <ListContainer>
      {pokemonList.map(function (pokemon) {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={() => {
              onAddPokemon(pokemon);
            }}
            isSelected={false}
          />
        );
      })}
    </ListContainer>
  );
}

export default PokemonList;

const ListContainer = styled.div`
  background-color: #dbdbdb;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  width: 1200px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
`;
