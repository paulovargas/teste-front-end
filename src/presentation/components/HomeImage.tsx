// components/StyledComponent.tsx
import styled from 'styled-components';
import '../../assets/img/pokemon.png'

const HomeImage = styled.div`
background-image: url('/images/pokemon-hero.jpg'); /* Substitua pelo caminho real da sua imagem */
background-size: cover;
background-position: center;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
color: white;
`;

export default HomeImage;
