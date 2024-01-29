// components/StyledComponent.tsx
import styled from 'styled-components';

const Title = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  margin-left: 50px;
  margin-bottom: 10px;
`;

export default Title;
