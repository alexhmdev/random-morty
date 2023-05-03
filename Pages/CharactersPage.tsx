import { useEffect, useState } from 'react';
import { Container, Image, TextInput } from '../components';
import { getCharacters } from '../utils/api';
import Character from '../components/character/Character';
import { FlatList } from 'react-native-gesture-handler';
import { type Characters, type Result } from '../models/characters.model';

const CharactersPage = (): React.ReactElement => {
  const [charactersData, setCharactersData] = useState<Result[]>([]);
  const [page, setPage] = useState(1);

  const fetchCharacters = async (): Promise<void> => {
    const data: Characters = await getCharacters(page);
    if (data.error) {
      alert('Error fetching characters' + JSON.stringify(data.error));
    }
    setCharactersData((current) => [...current, ...data.results]);
  };

  const getMoreCharacters = (): void => {
    // eslint-disable-next-line no-return-assign
    setPage(page + 1);
    fetchCharacters();
  };
  useEffect(() => {
    fetchCharacters();
  }, []);
  return (
    <Container flex={1}>
      <Container flex={1}>
        <Container end={100}>
          <Image
            source={require('../assets/images/morty2.png')}
            width={100}
            height={100}
            resizeMode="contain"
          />
        </Container>
        <TextInput
          placeholder="Search a character..."
          height={32}
          width={300}
        />
      </Container>
      <Container flex={4}>
        <FlatList
          data={charactersData}
          renderItem={({ item }) => (
            <Character image={item.image} name={item.name} />
          )}
          keyExtractor={(item) => `${item.id}`}
          numColumns={3}
          onEndReached={getMoreCharacters}
        />
      </Container>
    </Container>
  );
};

export default CharactersPage;
