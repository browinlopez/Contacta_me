import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import login from '../screens/login'
import home from '../screens/home'
import instrucciones from '../screens/instrucciones'

const Stack = createNativeStackNavigator();

const Navigation = () =>  {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={login}/>
            <Stack.Screen name="home" component={home}/>
            <Stack.Screen name="instrucciones" component={instrucciones}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;