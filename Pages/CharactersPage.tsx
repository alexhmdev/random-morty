import { useEffect, useState } from 'react';
import { Container, Image, Searchbar } from '../components';
import { getCharacters } from '../utils/api';
import Character from '../components/character/Character';
import { FlatList } from 'react-native-gesture-handler';
import { type Characters, type Result } from '../models/characters.model';
import useDebounce from '../hooks/useDebounce';
import { Alert } from 'react-native';

const CharactersPage = (): React.ReactElement => {
  const [charactersData, setCharactersData] = useState<Result[]>([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState<string>('');

  const debouncedValue = useDebounce(searchText, 500);

  const fetchCharacters = async (): Promise<void> => {
    if (searchText) {
      setPage(0);
      const data: Characters = await getCharacters(0, searchText);
      console.log(data.results);
      if (data.error) return Alert.alert('Oops', JSON.stringify(data.error));
      return setCharactersData(data.results);
    }
    const data: Characters = await getCharacters(page);
    if (data.error) {
      alert('Error fetching characters' + JSON.stringify(data.error));
    }
    // Filter existing characters
    const filteredData = data.results.filter(
      (item) => !charactersData.find((character) => character.id === item.id)
    );
    setCharactersData((current) => [...current, ...filteredData]);
  };

  const getMoreCharacters = (): void => {
    // eslint-disable-next-line no-return-
    if (searchText) return;
    setPage(page + 1);
    fetchCharacters();
  };
  useEffect(() => {
    fetchCharacters();
  }, [debouncedValue]);

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);
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
        <Searchbar
          setText={setSearchText}
          placeholder="Search a character..."
          height={32}
          width={300}
          value={searchText}
        />
      </Container>
      <Container flex={3}>
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
