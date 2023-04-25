import { ImageSourcePropType } from 'react-native/types';
import StyledImage from './Image.styles';

export type Props = {
  source: ImageSourcePropType;
  width: number;
  height: number;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
};

const Image = ({ source, width, height, rounded, resizeMode, objectFit }: Props) => {
  return (
    <StyledImage
      source={source}
      width={width}
      height={height}
      rounded={rounded}
      resizeMode={resizeMode}
      objectFit={objectFit}
    />
  );
};

export default Image;
