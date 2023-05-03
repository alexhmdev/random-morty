import { StyledTextInput } from './TextInput.styles';

export interface TextInputProps {
  placeholder: string;
  height?: number;
  width?: number;
  value?: string;
}

const TextInput = ({
  placeholder,
  height,
  width,
  value,
}: TextInputProps): React.ReactElement => {
  return (
    <StyledTextInput
      placeholder={placeholder}
      width={width}
      height={height}
      value={value}
    />
  );
};

export default TextInput;
