import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import Characters from './pages/Characters';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
     <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Characters" component={Characters} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
