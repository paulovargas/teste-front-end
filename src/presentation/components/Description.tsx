// components/StyledComponent.tsx
import styled from 'styled-components';

const Description = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  margin-left: 50px;
  margin-bottom: 25px;

`;

export default Description;
