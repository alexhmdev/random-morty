import styled from 'styled-components/native';
import { type SearchbarProps } from './Searchbar';
import { roundedSizes } from '../../utils/roundedSizes';

export const StyledTextInput = styled.TextInput`
  width: ${({ width }: SearchbarProps) => (width ? `${width}px` : '100%')};
  height: ${({ height }: SearchbarProps) => (height ? `${height}px` : '100%')};
  font-size: 16px;
  color: #000;
`;

export const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-radius: ${roundedSizes.lg}px;
  background-color: #f0f0f0;
  elevation: 10;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;
