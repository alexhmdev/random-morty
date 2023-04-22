import { ReactNode } from 'react';
import styled from 'styled-components/native';
type Props = {
  children: ReactNode;
  flex?: number;
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  bgColor?: string;
  width?: string;
  height?: string;
  gap?: string;
};

const StyledContainer = styled.View`
  flex: ${(props: Props) => props.flex ?? 1};
  flex-direction: ${(props: Props) => props.flexDirection};
  background-color: ${(props: Props) => props.bgColor ?? '#f5f5f5'};
  gap: ${(props: Props) => props.gap};
  align-items: center;
  justify-content: center;
`;

const Container = ({
  children,
  flex,
  flexDirection,
  width,
  height,
  gap,
}: Props) => {
  return (
    <StyledContainer
      flex={flex}
      flexDirection={flexDirection}
      width={width}
      height={height}
      gap={gap}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
