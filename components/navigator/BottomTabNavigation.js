import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../bottomTabNav/Profile';
import Camera from '../bottomTabNav/Camera';

import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: () => <AntDesign name="profile" size={25} color="blue" />
      }}/>
      <Tab.Screen name="Camera" component={Camera} options={{
        tabBarIcon: () => <AntDesign name="camerao" size={25} color="blue" />
         }}/>
    </Tab.Navigator>
  );
}