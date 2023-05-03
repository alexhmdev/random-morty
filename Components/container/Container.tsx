import { type ReactNode } from 'react';
import StyledContainer from './Container.styles';
export interface Props {
  children: ReactNode;
  position?: 'absolute' | 'relative';
  flex?: number;
  flexDirection?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
  gap?: number;
  top?: number;
  bottom?: number;
  start?: number;
  end?: number;
  bgColor?: string;
  width?: number;
  height?: number;
  margin?: number;
  padding?: number;
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  rounded?: 'sm' | 'md' | 'lg' | 'full';
}

const Container = ({
  children,
  position,
  flex,
  flexDirection,
  gap,
  top,
  bottom,
  start,
  end,
  bgColor,
  width,
  height,
  margin,
  padding,
  alignItems,
  justifyContent,
  rounded,
}: Props): React.ReactElement => {
  return (
    <StyledContainer
      position={position}
      flex={flex}
      flexDirection={flexDirection}
      gap={gap}
      top={top}
      bottom={bottom}
      start={start}
      end={end}
      bgColor={bgColor}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      alignItems={alignItems}
      justifyContent={justifyContent}
      rounded={rounded}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
