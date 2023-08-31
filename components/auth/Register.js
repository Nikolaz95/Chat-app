import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default function Register({navigation}) {
  return (
    <View style={styles.container}>



        <TextInput style={styles.input} placeholder='Username'></TextInput>

        <TextInput style={styles.input} placeholder='Password' ></TextInput>

        {/* <Text style={styles.textinput}>Username alredy exists</Text> */}

        <Button style={styles.btn} title='Register'></Button>
        <Button title='Back to login' onPress={() => navigation.navigate('Login')}></Button>
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
    },

    btn : {
        marginBottom: 10,
    },


    
  });