import { ReactNode } from 'react';
import StyledContainer from './Container.styles';
export type Props = {
  children: ReactNode;
  position?: 'absolute' | 'relative';
  top?: number | string;
  bottom?: number | string;
  start?: number | string;
  end?: number | string;
  bgColor?: string;
  width?: string;
  height?: string;
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
};

const Container = ({
  children,
  position,
  top,
  bottom,
  start,
  end,
  width,
  height,
  alignItems,
  justifyContent,
}: Props) => {
  return (
    <StyledContainer
      position={position}
      top={top}
      bottom={bottom}
      start={start}
      end={end}
      width={width}
      height={height}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
