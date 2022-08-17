import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthProvider, { useAuth } from './AuthContext';

//Pantallas
import Home from './screens/home'
import Login from './screens/login'
import Instrucciones  from './screens/instrucciones';


const Stack =  createNativeStackNavigator();
const Navigator = () => {
  const [user] = useAuth();

  if(!user){
    return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    );
  }
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="instrucciones" component={Instrucciones} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator/>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;