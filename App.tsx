import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './pages/Home'
import Characters from './pages/Characters'
import { Header } from './components'

const Drawer = createDrawerNavigator()

export default function App (): React.ReactElement {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        header: ({ navigation }) => {
          return <Header navigation={navigation} />
        },
        drawerPosition: 'right',
        drawerActiveBackgroundColor: 'transparent',
        drawerStyle: {
          marginTop: 100,
          backgroundColor: '#f5f5f5',
          width: '100%'
        },
        drawerLabelStyle: {
          fontSize: 30,
          textAlign: 'center',
          marginRight: -32
        },
        overlayColor: 'transparent',
        drawerType: 'front'
      }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Characters" component={Characters} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
