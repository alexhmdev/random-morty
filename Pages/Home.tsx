import { Container, Image } from '../components'

function Home (): React.ReactElement {
  return (
    <Container alignItems="center" justifyContent="center" flex={1} bgColor='#f5f5f5'>
      <Container flex={1}>
        <Image
          source={require('../assets/images/RickandMortyTextLogo.png')}
          width={330}
          height={100}
        />
      </Container>
      <Container flex={1}>
        <Image
          source={require('../assets/images/portal.png')}
          width={300}
          height={300}
        />
      </Container>
      <Container flexDirection="row" flex={1} alignItems='flex-end' gap={25}>
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
