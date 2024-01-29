// components/StyledComponent.tsx
import styled from 'styled-components';

const Rota = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  margin-left: 50px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export default Rota;
