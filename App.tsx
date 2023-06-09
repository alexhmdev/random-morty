import 'react-native-gesture-handler';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import CharactersPage from './pages/CharactersPage';
import { Header } from './components';
import EpisodeDetails from './pages/EpisodeDetails';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
  dark: false,
};

const Drawer = createDrawerNavigator();

export default function App(): React.ReactElement {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: ({ navigation }) => {
            return <Header navigation={navigation} />;
          },
          drawerPosition: 'right',
          drawerActiveBackgroundColor: 'transparent',
          drawerStyle: {
            marginTop: 100,
            backgroundColor: '#fff',
            width: '100%',
          },
          drawerLabelStyle: {
            fontSize: 30,
            textAlign: 'center',
            marginRight: -32,
          },
          overlayColor: 'transparent',
          drawerType: 'front',
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Characters" component={CharactersPage} />
        <Drawer.Screen name="EpisodeDetails" component={EpisodeDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
