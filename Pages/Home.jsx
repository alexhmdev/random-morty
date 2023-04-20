import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Header = styled.Text`
  font-size: 25px;
`;

function Home() {
  return (
    <Container>
      <Header>Hello world</Header>
    </Container>
  );
}

export default Home;
