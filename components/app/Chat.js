import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default function Chat() {
  return (
    <View style={styles.container}>

        <TextInput style={styles.input} placeholder='Message...'></TextInput>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'flex-end',
    },

    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 20,
    },

});