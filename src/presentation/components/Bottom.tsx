// pages/index.tsx
import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  width: auto;
  height: 40px;
  input:focus-visible {
    border-color: transparent !important;
    box-shadow: none;
  }
`;

const Aside = styled.div`
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

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
`;

const CentroPoke = styled.button`
  display: flex;
  align-items: center;
  border: none;
  width: auto;
  height: 40px;
  border-radius: 25px;
  background-color: red;
  color: white;
  text-decoration: underline;
`;

const QuemSomos = styled.div`
  width: auto;
`;

const AgendaConsulta = styled.button`
  display: flex;
  align-items: center;
  border: none;
  width: auto;
  height: 40px;
  border-radius: 25px;
  background-color: red;
`;

const Bottom: NextPage = () => {
  return (
    <Aside>
      <p>
        Todas as marcas e ilustrações utilizadas são de seus respectivos donos.
      </p>
    </Aside>
  );
};

export default Bottom;
