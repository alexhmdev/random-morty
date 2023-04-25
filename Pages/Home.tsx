import { Container, Image } from '../components';

function Home() {
  return (
    <Container alignItems="center" justifyContent="center">
      <Container>
        <Image
          source={require('../assets/images/RickandMortyTextLogo.png')}
          width={330}
          height={100}
        />
      </Container>
      <Container>
        <Image
          source={require('../assets/images/portal.png')}
          width={300}
          height={300}
        />
      </Container>
      <Container alignItems="flex-end">
        <Image
          source={require('../assets/images/rick1.png')}
          width={110}
          height={200}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/morty1.png')}
          width={70}
          height={200}
          resizeMode="contain"
        />
      </Container>
    </Container>
  );
}

export default Home;
