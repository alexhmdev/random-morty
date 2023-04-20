import styled from 'styled-components/native';

type Props = {
  source: string;
  width: string;
  height: string;
};

const StyledImage = styled.Image``;
const Image = ({ source, width, height }: Props) => {
  return <StyledImage source={{ uri: source }} width={width} height={height} />;
};

export default Image;
