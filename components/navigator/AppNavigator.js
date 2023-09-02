import { createDrawerNavigator } from '@react-navigation/drawer';
import Chat from '../app/Chat';
import Settings from '../app/Settings';
import BottomTabNavigator from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="Settings" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}