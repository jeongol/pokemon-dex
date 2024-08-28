import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>포켓몬 도감</h1>
        <button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</button>
      </div>
    </div>
  );
}

export default Home;
