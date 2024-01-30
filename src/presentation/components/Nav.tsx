// pages/index.tsx
import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const StyledSVG = styled.div`
  background-image: url("/images/white-pokeball.svg");
  background-repeat: no-repeat;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-top: 15px;
  margin-left: 8px;
`;

const Aside = styled.div`
  color: white;
  display: flex;
  align-items: center;
  width: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 50px;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 15px;
`;

const QuemSomos = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-right: 25px;
  text-decoration: none;
`;

const ItemsLeft = styled.div`
  display: flex;
  justify-content: left;
`;

const ItemsRight = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 25px;
`;

const CentroPoke = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 25px;
  background-color: red;
`;

const AgendaConsulta = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 25px;
  background-color: red;
  p {
  align-items: center;
    text-align: center;
    margin: 15px;
  }
`;

const Nav: NextPage = () => {
  return (
    <Aside>
      <ItemsLeft>
        <CentroPoke>
          <StyledSVG />

          {/* <svg
            width="37"
            height="34"
            viewBox="0 0 37 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="17" r="17" fill="white" />
            <line y1="17" x2="37" y2="17" stroke="#E40F0F" stroke-width="2" />
            <circle cx="19.5" cy="17.5" r="6.5" fill="#E40F0F" />
            <circle cx="19.5" cy="17.5" r="4.5" fill="white" />
          </svg> */}
          <Link href="/">
            <StyledLink>Centro Pokemon</StyledLink>
          </Link>
        </CentroPoke>
      </ItemsLeft>
      <ItemsRight>
        <Link href="/QuemSomos">
          <QuemSomos>
            <p>Quem Somos</p>
          </QuemSomos>
        </Link>

        <AgendaConsulta>
          <Link href="/AgendarConsulta">
            <StyledLink>
              <p>Agendar Consulta</p>
            </StyledLink>
          </Link>
        </AgendaConsulta>
      </ItemsRight>
    </Aside>
  );
};

export default Nav;
