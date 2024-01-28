// pages/index.tsx
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import styled from "styled-components";
import StyledPage from "./styles/StyledPage";

const StyleHome = styled.div`
  
`;

const Home: NextPage = () => {
  return (
    <div>
      <StyledPage>Home</StyledPage>
    </div>
  );
};

export default Home;
