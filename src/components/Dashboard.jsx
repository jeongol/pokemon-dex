import React from "react";
import styled from "styled-components";

const Dashboard = ({ selectedPokemon }) => {
  // let content;
  // console.log(selectedPokemon);
  // if (selectedPokemon.length > 0) {
  //   content = (
  //  <ul>
  //    {selectedPokemon.map((pokemon) => (
  //      <li key={pokemon.id}>{pokemon.korean_name}</li>
  //    ))}
  //  </ul>
  //   );
  // } else {
  //   content = <p>선택된 포켓몬이 없습니다.</p>;
  // }
  return (
    <DashboardContainer>
      <h2>대시보드</h2>
      <ul>
        {selectedPokemon.map((pokemon) =>
          pokemon === null ? (
            <li key={crypto.randomUUID()}>확인</li>
          ) : (
            <li key={pokemon.id}>{pokemon.korean_name}</li>
          )
        )}
      </ul>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  background-color: #dbdbdb; //994848
  width: 1200px;
  height: 240px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  gap: 10px;
  padding: 10px;
  margin: auto;
  border-radius: 10px;
`;
