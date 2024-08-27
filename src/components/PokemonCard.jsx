import React from "react";
import styled from "styled-components";

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  return (
    <Card>
      <img src={pokemon.img_url} alt={""} />
      <p>no.</p>

      <p>{pokemon.korean_name}</p>

      {isSelected ? (
        <Button
          onClick={(pokemon) => {
            onRemove(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={(pokemon) => {
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;

export const Card = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  /* display: absolute; */
  z-index: 1;
  border: none;
  height: 40px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin: auto;
`;
