import { TouchableOpacity } from 'react-native';
import { StyledContainer, StyledTextInput } from './Searchbar.styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export interface SearchbarProps {
  placeholder: string;
  setText: (text: string) => void;
  height?: number;
  width?: number;
  value?: string;
  handlePress?: () => void;
}

const Searchbar = ({
  placeholder,
  setText,
  height,
  width,
  value,
  handlePress,
}: SearchbarProps): React.ReactElement => {
  const handleDeleteText = (): void => {
    setText('');
  };
  return (
    <StyledContainer>
      <StyledTextInput
        placeholder={placeholder}
        width={width}
        height={height}
        value={value}
        onChangeText={(text) => {
          setText(text);
        }}
      />
      {handlePress ? (
        <TouchableOpacity onPress={handlePress}>
          <Ionicons name="search" size={20} color="#000" />
        </TouchableOpacity>
      ) : value ? (
        <TouchableOpacity onPress={handleDeleteText}>
          <Ionicons name="close" size={20} color="#000" />
        </TouchableOpacity>
      ) : null}
    </StyledContainer>
  );
};

export default Searchbar;
