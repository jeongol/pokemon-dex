import React from "react";
import styled from "styled-components";

const Dashboard = ({ selectedPokemon }) => {
  return (
    <DashboardContainer>
      <h2>포켓몬 선택</h2>
      <DashboardCard>
        <ul>
          {selectedPokemon.map((pokemon, inadd) =>
            pokemon === null ? (
              <li key={inadd}>확인</li>
            ) : (
              <li key={pokemon.id}>{pokemon.korean_name}</li>
            )
          )}
        </ul>
      </DashboardCard>
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
