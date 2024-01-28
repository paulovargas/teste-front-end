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
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledLink = styled.a`
text-decoration: none;
color: inherit;
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

const Nav: NextPage = () => {
  return (
    <Aside>
      <CentroPoke>
        <StyledLink>
          <Link href="/">Centro Pokemon</Link>
        </StyledLink>
      </CentroPoke>

      <Link href="/QuemSomos">
        <QuemSomos>
          <p>Quem Somos</p>
        </QuemSomos>
      </Link>
      <Link href="/AgendarConsulta">
        <AgendaConsulta>Agendar Consulta</AgendaConsulta>
      </Link>
    </Aside>
  );
};

export default Nav;
