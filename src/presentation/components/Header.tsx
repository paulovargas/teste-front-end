// components/StyledComponent.tsx
import styled from 'styled-components';

const Header = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 16px;
`;

export default Header;
