import React from "react";
import styled from "styled-components";

function PokemonCard({ pokemon, handleOnClick }) {
  return (
    <Card
      onClick={() => {
        handleOnClick(pokemon);
      }}
    >
      <div>{pokemon.koren_name}</div>
      <img src={pokemon.img_url} />
      <div>{pokemon.description}</div>
    </Card>
  );
}
export default PokemonCard;

export const Card = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1;
  text-align: coenter;
  padding: 10px;
  cursor: pointer;
  color: black;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0, 0.2);
  }
`;
