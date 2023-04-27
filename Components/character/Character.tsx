import { Alert, TouchableOpacity } from 'react-native'
import Container from '../container/Container'
import Image from '../image/Image'

interface Props {
  image: string
  name: string
}

const Character = ({ image, name }: Props): React.ReactElement => {
  const handlePress = (): void => {
    Alert.alert(name)
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <Container margin={5}>
        <Image
          source={{ uri: image }}
          width={100}
          height={100}
          rounded="full"
        />
      </Container>
    </TouchableOpacity>
  )
}

export default Character
