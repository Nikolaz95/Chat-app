import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export default function Login({navigation}) {
  return (
    <View style={styles.container}>

      <TextInput style={styles.input} placeholder='Username'></TextInput>

      <TextInput style={styles.input} placeholder='Password' ></TextInput>

      {/* <Text style={styles.textinput}>Incorrect user information</Text> */}


      {/* <Text style={styles.textinput2}>You have successfully registered! Please login.</Text> */}

      <Button title='Log in'></Button>
      <Button title='Register' onPress={() => navigation.navigate('Register')}></Button>


    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 20,
    },

    textinput: {
        color: 'red',
        alignSelf: 'center',
        marginBottom: 10,
    },

    textinput2 : {
        color: 'green',
        alignSelf: 'center',
        marginBottom: 10,
    },
  });