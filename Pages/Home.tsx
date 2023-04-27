import { TouchableOpacity } from 'react-native-gesture-handler'
import { Container, Image } from '../components'
import { type Result, type Episodes } from '../models/episode.model'
import { getEpisodes } from '../utils/api'
import { type ParamListBase } from '@react-navigation/native'
import { type DrawerNavigationProp } from '@react-navigation/drawer'
interface Props {
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>
}

function Home ({ navigation }: Props): React.ReactElement {
  const handleRandomEpisode = async (): Promise<void> => {
    const data: Episodes = await getEpisodes() as Episodes
    if (data.error) { alert(`Error fetching episode ${JSON.stringify(data.error)}`) }
    const randomEpisode = Math.round(Math.random() * data.info.count)

    const randomEpisodeData: Result = await getEpisodes(randomEpisode) as Result
    console.log(randomEpisodeData)
    navigation.navigate('EpisodeDetails', randomEpisodeData)
  }

  return (
    <Container
      alignItems="center"
      justifyContent="center"
      flex={1}
      bgColor="#f5f5f5"
    >
      <Container flex={1}>
        <Image
          source={require('../assets/images/RickandMortyTextLogo.png')}
          width={330}
          height={100}
        />
      </Container>
      <Container flex={1}>
        <TouchableOpacity onPress={handleRandomEpisode}>
          <Image
          source={require('../assets/images/portal.png')}
          width={300}
          height={300}
          />
        </TouchableOpacity>

      </Container>
      <Container flexDirection="row" flex={1} alignItems="flex-end" gap={25}>
        <Container>
          <Image
            source={require('../assets/images/rick1.png')}
            width={110}
            height={200}
            resizeMode="contain"
          />
        </Container>
        <Container>
          <Image
            source={require('../assets/images/morty1.png')}
            width={100}
            height={140}
            resizeMode="contain"
          />
        </Container>
      </Container>
    </Container>
  )
}

export default Home
