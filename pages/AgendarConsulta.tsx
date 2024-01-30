import Description from "../src/presentation/components/Description";
import FormAgendarConsulta from "../src/presentation/components/pages/FormAgendarConsulta";
import StyledComponent from "../src/presentation/components/Header";
import Rota from "../src/presentation/components/Rota";
import Title from "../src/presentation/components/Title";


function AgendarConsulta() {
  return (
    <div>
      <StyledComponent>
        <Rota>
          Home {">"} Agendar Consulta
        </Rota>
        <Title>
          <h1>Agendar Consulta</h1>
        </Title>
        <Description>
          A maior rede de tratamento pokêmon.
        </Description>
      </StyledComponent>
        <FormAgendarConsulta></FormAgendarConsulta>
    </div>
  );
}

export default AgendarConsulta;
