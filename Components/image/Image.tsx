import { type ImageSourcePropType } from 'react-native/types';
import StyledImage from './Image.styles';

export interface Props {
  source: ImageSourcePropType;
  width: number | string;
  height: number | string;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
}

const Image = ({
  source,
  width,
  height,
  rounded,
  resizeMode,
  objectFit,
}: Props): React.ReactElement => {
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
