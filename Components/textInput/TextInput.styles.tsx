import styled from 'styled-components/native';
import { type TextInputProps } from './TextInput';

export const StyledTextInput = styled.TextInput`
  width: ${({ width }: TextInputProps) => (width ? `${width}px` : '100%')};
  height: ${({ height }: TextInputProps) => (height ? `${height}px` : '100%')};
  font-size: 16px;
  padding: 8px;
  border-radius: 8px;
  color: #000;
  background-color: #f0f0f0;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
  elevation: 10;
`;
