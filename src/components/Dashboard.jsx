import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon }) => {
  return (
    <DashboardContainer>
      <Title>대시보드</Title>
      {selectedPokemon.length === 0 ? (
        <Message>선택된 포켓몬이 없습니다.</Message>
      ) : (
        <DashboardContent>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </DashboardContent>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  background-color: #d8daa6;

  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const DashboardCard = styled.div`
  background-color: ;
`;
