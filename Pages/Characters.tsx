import { useEffect, useState } from 'react'
import { Container } from '../components'
import { getCharacters } from '../utils/api'
import Character from '../components/character/Character'
import { FlatList } from 'react-native-gesture-handler'
import { type Characters, type Result } from '../models/characters.model'

const CharactersPage = (): React.ReactElement => {
  const [charactersData, setCharactersData] = useState<Result[]>([])
  const [page, setPage] = useState(1)

  const fetchCharacters = async (): Promise<void> => {
    const data: Characters = await getCharacters(page)
    if (data.error) {
      alert('Error fetching characters' + JSON.stringify(data.error))
    }

    setCharactersData((current) => [...current, ...data.results])
  }

  const getMoreCharacters = (): void => {
    // eslint-disable-next-line no-return-assign
    setPage(page + 1)
  }
  useEffect(() => {
    fetchCharacters()
  }, [page])
  return (
    <Container height={450}>
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
  )
}

export default CharactersPage
