import 'react-native-gesture-handler';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './components/navigator/AuthNavigator';
import AppNavigator from './components/navigator/AppNavigator';
import BottomTabNavigator from './components/navigator/BottomTabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>

      <AuthNavigator />

      {/* <AppNavigator /> */}

      {/* <BottomTabNavigator /> */}

      {/* < Login /> */}

      {/* <Register /> */}



      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
