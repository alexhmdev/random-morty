import { Container, Image } from '../Components';

function Home() {
  return (
    <Container>
      <Container>
        <Image
          source={require('../assets/images/RickandMortyTextLogo.png')}
          width="330px"
          height="100px"
        />
      </Container>
      <Container>
        <Image
          source={require('../assets/images/portal.png')}
          width="300px"
          height="300px"
        />
      </Container>
      <Container flexDirection="row" gap="50px">
        <Image
          source={require('../assets/images/rick1.png')}
          width="110px"
          height="200px"
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/morty1.png')}
          width="70px"
          height="200px"
          resizeMode="contain"
        />
      </Container>
    </Container>
  );
}

export default Home;
