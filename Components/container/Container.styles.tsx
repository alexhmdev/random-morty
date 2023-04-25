import styled from 'styled-components/native';
import { Props } from './Container';
const StyledContainer = styled.View`
  position: ${(props: Props) => props.position ?? 'relative'};
  flex: 1;
  background-color: ${(props: Props) => props.bgColor ?? '#f5f5f5'};
  align-items: ${(props: Props) => props.alignItems ?? 'center'};
  justify-content: ${(props: Props) => props.justifyContent ?? 'center'};
`;

export default StyledContainer;
