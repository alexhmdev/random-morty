import { Text, TouchableOpacity } from 'react-native';
import { Container, Image } from '../components';
import { type Result } from '../models/episode.model';
import { type RouteProp } from '@react-navigation/native';
import { type DrawerNavigationProp } from '@react-navigation/drawer';

interface Props {
  route: RouteProp<any, any>;
  navigation: DrawerNavigationProp<any, any>;
}
const EpisodeDetails = ({ route, navigation }: Props): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, episode, air_date, created, id } = route.params as Result;
  return (
    <Container flex={1} gap={10}>
      <Image
        source={require('../assets/images/rickmortyeyes.png')}
        width={300}
        height={300}
      />
      <Container
        bgColor="#f0f0f0"
        padding={40}
        rounded="md"
        flexDirection="column"
        gap={10}
      >
        <Text>{name}</Text>
        <Text>{air_date}</Text>
        <Text>{episode}</Text>
      </Container>
      <TouchableOpacity
        onPress={() => {
          navigation.jumpTo('Home');
        }}
      >
        <Image
          source={require('../assets/images/portal.png')}
          width={300}
          height={300}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default EpisodeDetails;
