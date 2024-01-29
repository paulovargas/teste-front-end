/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import HomeImage from "../src/presentation/components/HomeImage";

const HomeContainer = styled.div`
  //background-image: url("/images/pokemon-hero.jpg"); /* Substitua pelo caminho real da sua imagem */
  //background-size: cover;
  //background-position: center;
  //min-height: 100vh;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //color: white;
`;

function HomePage() {
  return (
    <div>
      <HomeImage>
      <h1>Cuidamos bem do seu pokémon, <br></br>para ele cuidar bem de você</h1>
      </HomeImage>
    </div>
  );
}

export default HomePage;
