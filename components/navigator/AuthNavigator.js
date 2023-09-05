// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../auth/Login';
import Register from '../auth/Register';
import AppNavigator from './AppNavigator';


const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Chat pages" component={AppNavigator} options={{headerShown: false}}/>  
      </Stack.Navigator>
  );
}

