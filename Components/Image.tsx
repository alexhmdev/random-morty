import { ImageSourcePropType } from 'react-native/types';
import styled from 'styled-components/native';

type Props = {
  source: ImageSourcePropType;
  width: string;
  height: string;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
};

const StyledImage = styled.Image`
  width: ${(props: Props) => props.width};
  height: ${(props: Props) => props.height};
  resize-mode: ${(props: Props) => props.resizeMode ?? 'cover'};
  object-fit: ${(props: Props) => props.objectFit ?? 'cover'};
`;
const Image = ({ source, width, height, resizeMode, objectFit }: Props) => {
  return (
    <StyledImage
      source={source}
      width={width}
      height={height}
      resizeMode={resizeMode}
      objectFit={objectFit}
    />
  );
};

export default Image;
