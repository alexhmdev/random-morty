import { useEffect, useState } from "react"
import { Container, Header, Image } from "../components"
import { getCharacters } from "../utils/api"
import Character from "../components/character/Character"
import { FlatList } from "react-native-gesture-handler"



const Characters = () => {
    const [characters, setCharacters] = useState([])
    const fetchCharacters = async () => {
        const data: any = await getCharacters()
        setCharacters(data.results)
    }
    useEffect(() => {
        fetchCharacters()
    }, [])
    return (<Container>
          <FlatList
            data={characters}
            renderItem={({ item }: {item: {image: string, name:string}}) => <Character image={ item.image} name={item.name} />}
            keyExtractor={item => item.id}
            numColumns={3}
      />

    </Container>)
}

export default Characters