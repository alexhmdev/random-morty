import Container from '../container/Container'
import { useDrawerStatus, type DrawerNavigationProp } from '@react-navigation/drawer'
import { type ParamListBase } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Image from '../image/Image'
import { TouchableOpacity } from 'react-native'

export interface Props {
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>
}

const Header = ({ navigation }: Props): React.ReactElement => {
  const isDrawerOpen = useDrawerStatus() === 'open'
  return (
    <Container flexDirection='row' justifyContent='space-between' alignItems='flex-end' padding={10} height={100} bgColor='#fff'>
        <Image source={require('../../assets/images/logo.png')} width={50} height={50}/>
      <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Ionicons name={`${isDrawerOpen ? 'close' : 'menu'}`} size={30} color={'#a5a5a5'}/>
        </TouchableOpacity>
    </Container>
  )
}

export default Header
