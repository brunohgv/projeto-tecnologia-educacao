import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppPage from './views/AppPage';
import Home from './views/Home';
import AppListPage from './views/AppListPage';
import TutorialPage from './views/TutorialPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
        <NavigationContainer >
          <Stack.Navigator screenOptions={navigatorOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AppList" component={AppListPage} />
            <Stack.Screen name="App" component={AppPage} />
            <Stack.Screen name="Tutorial" component={TutorialPage} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

const navigatorOptions = {
  headerStyle: {
    backgroundColor: '#D4E2D4'
  },
  headerTintColor: '#383B53',
  headerBackTitle: 'Voltar',
}
