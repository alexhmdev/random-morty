import styled from 'styled-components/native';
import { type Props } from './Image';
import { roundedSizes } from '../../utils/roundedSizes';

const StyledImage = styled.Image`
  width: ${(props: Props) =>
    typeof props.width === 'number' ? `${props.width}px` : props.width};
  height: ${(props: Props) =>
    typeof props.height === 'number' ? `${props.height}px` : props.height};
  resize-mode: ${(props: Props) => props.resizeMode ?? 'cover'};
  object-fit: ${(props: Props) => props.objectFit ?? 'cover'};
  ${({ rounded }: Props) =>
    rounded && `border-radius:${roundedSizes[rounded] ?? 0}px`}
`;

export default StyledImage;
