import 'react-native-gesture-handler';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './components/contexts/AppProvider';
import AuthNavigator from './components/navigator/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppProvider>
            <AuthNavigator/>
        </AppProvider>

      


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
