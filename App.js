// esta é o arquivo principal do react onde a aplicação começa
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ProfileScreen} from './screens/about.js'
import {HomeScreen} from './screens/home.js'

const Stack = createNativeStackNavigator();

function App() {
  return (
    // Aqui funciona a navegação por telas em formato de pilha do react
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/*aqui fica as telas do componente de navegação*/}
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// isto garante que o App.js seja o primeiro arquivo a ser executado
export default App;