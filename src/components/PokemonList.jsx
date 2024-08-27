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
  border: 1px solid 
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
`;
