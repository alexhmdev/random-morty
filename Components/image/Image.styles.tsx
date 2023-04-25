import styled from 'styled-components/native';
import { Props } from './Image';

const roundedSizes = {
  sm: 2,
  md: 5,
  lg: 10,
  full: 100
}

const StyledImage = styled.Image`
  width: ${(props: Props) => props.width}px;
  height: ${(props: Props) => props.height}px;
  resize-mode: ${(props: Props) => props.resizeMode ?? 'cover'};
  object-fit: ${(props: Props) => props.objectFit ?? 'cover'};
  border-radius: ${(props: Props) => roundedSizes[props.rounded] ?? 0}px;
`;

export default StyledImage;
