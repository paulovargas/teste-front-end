import Description from "../src/presentation/components/Description";
import StyledComponent from "../src/presentation/components/Header";
import Rota from "../src/presentation/components/Rota";
import Title from "../src/presentation/components/Title";


function QuemSomos() {
  return (
    <div>
      <StyledComponent>
        <Rota>
          Home {">"} Quem Somos
        </Rota>
        <Title>
          <h1>Quem Somos</h1>
        </Title>
        <Description>
          A maior rede de tratamento pokêmon.
        </Description>
      </StyledComponent>
    </div>
  );
}

export default QuemSomos;
