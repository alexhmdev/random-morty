import { Text } from 'react-native'
import { Container } from '../components'
import { type Result } from '../models/episode.model'
import { type RouteProp } from '@react-navigation/native'
import { type DrawerNavigationProp } from '@react-navigation/drawer'

interface Props {
  route: RouteProp<any, any>
  navigation: DrawerNavigationProp<any, any>
}
const EpisodeDetails = ({ route, navigation }: Props): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, episode, air_date, created, id } = route.params as Result
  return (
    <Container>
      <Text>{name}</Text>
      <Text>{ episode}</Text>
      <Text>{ air_date}</Text>
      <Text>{ new Date(created).toLocaleString()}</Text>
      <Text>{ id}</Text>
    </Container>
  )
}

export default EpisodeDetails
