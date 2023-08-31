import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default function Settings() {
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Profile</Text>

        <TextInput style={styles.input} placeholder='Firstname'></TextInput>


        <TextInput style={styles.input} placeholder='Lastname'></TextInput>

        <Button title='Update'></Button>

        <Button title='Delete'></Button>

        <Button title='Logout'></Button>


    </View>
  )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },

    headerText: {
        alignSelf: 'center'
    },

    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 20,
    },

});