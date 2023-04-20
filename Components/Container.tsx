import { ReactNode } from 'react';
import styled from 'styled-components/native';
type Props = {
  children: ReactNode;
  flex?: number;
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
};

const StyledContainer = styled.View`
  flex: ${(props: Props) => props.flex ?? 1};
  flex-direction: ${(props: Props) => props.flexDirection};
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
`;

const Container = ({ children, flex, flexDirection }: Props) => {
  return (
    <StyledContainer flex={flex} flexDirection={flexDirection}>
      {children}
    </StyledContainer>
  );
};

export default Container;
