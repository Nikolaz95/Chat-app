import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../bottomTabNav/Profile';
import CameraApp from '../bottomTabNav/CameraApp.js';

import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile"  component={Profile} options={{headerShown: false,
        tabBarIcon: () => <AntDesign name="profile" size={25} color="blue" />
      }}/>
      <Tab.Screen name="Camera" component={CameraApp} options={{headerShown: false,
        tabBarIcon: () => <AntDesign name="camerao" size={25} color="blue" />
         }}/>
    </Tab.Navigator>
  );
}