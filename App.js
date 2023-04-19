import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Header = styled.Text`
  color: red;
`;
export default function App() {
  return (
    <Container>
      <Header>Open up App.js to start working on your app!</Header>
      <StatusBar style="auto" />
    </Container>
  );
}
