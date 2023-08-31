// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../auth/Login';
import Register from '../auth/Register';


const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
  );
}

