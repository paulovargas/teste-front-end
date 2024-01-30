// pages/index.tsx
import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const StuledBottom = styled.div`
  background: black;
  color: white;
  display: flex;
  align-items: center;
  width: auto;
  justify-content: center;
  p {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

const Bottom: NextPage = () => {
  return (
    <StuledBottom>
      <p>
        Todas as marcas e ilustrações utilizadas são de seus respectivos donos.
      </p>
    </StuledBottom>
  );
};

export default Bottom;
