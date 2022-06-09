import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { App, Login, Dashboard, Detail, Register, PokeBag, Splash } from '../pages';

const Stack = createNativeStackNavigator();

function Routing() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="App"
        component={App}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PokeBag"
        component={PokeBag}
        options={{ headerShown: false }}
      />      
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      /> 
    </Stack.Navigator>
  );
}

export default Routing;