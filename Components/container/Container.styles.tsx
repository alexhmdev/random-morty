import styled from 'styled-components/native';
import { type Props } from './Container';
import { roundedSizes } from '../../utils/roundedSizes';
const StyledContainer = styled.View`
  position: ${(props: Props) => props.position ?? 'relative'};
  ${({ flex }) => flex && `flex:${flex}`}
  ${({ flexDirection }) => flexDirection && `flex-direction:${flexDirection}`} 
  ${(props: Props) => props.top && `top: ${props.top}px`}
  ${(props: Props) => props.bottom && `bottom: ${props.bottom}px`}
  ${(props: Props) => props.start && `start: ${props.start}px`}
  ${(props: Props) => props.end && `end: ${props.end}px`}
  ${({ gap }) => gap && `gap:${gap}px`}
  ${({ rounded }: Props) =>
    rounded && `border-radius:${roundedSizes[rounded] ?? 0}px`}
  background-color: ${(props: Props) => props.bgColor ?? 'transparent'};
  align-items: ${(props: Props) => props.alignItems ?? 'center'};
  justify-content: ${(props: Props) => props.justifyContent ?? 'center'};
`;

export default StyledContainer;
