import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { AuthContext } from '../contexts/AppProvider';

export default function Login({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {handleLogin, loginMessage} = useContext(AuthContext);

console.log('login',loginMessage)
  return (
    <View style={styles.container}>

      <TextInput 
        style={styles.input} 
        placeholder='Username' 
        value={userName} 
        onChangeText={(text)=>setUserName(text)}></TextInput>

      <TextInput 
        style={styles.input} 
        placeholder='Password' 
        value={password} 
        onChangeText={(text)=> setPassword(text)} ></TextInput>
      
      <Text style= {loginMessage === 'You have registered succesfully. Please login!'? styles.successmsg: styles.errormsg}>{loginMessage}</Text>

      {/* <Text style={styles.textinput}>Incorrect user information</Text> */}


      {/* <Text style={styles.textinput2}>You have successfully registered! Please login.</Text> */}

      
      <TouchableOpacity 
          style={styles.generalButton} 
          onPress={()=>handleLogin(userName,password)} >
        <Text>Log in</Text>

      </TouchableOpacity>

      
      <TouchableOpacity 

          style={styles.registerbtn} 
          onPress={()=>{
          navigation.navigate("Register");
      }} >
        <Text>Register</Text>
      </TouchableOpacity>


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
        borderRadius: 10,
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
    generalButton: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'black',
      padding: 10,
      marginHorizontal: 20,
    },

    registerbtn: {
      marginVertical: 20,
      marginHorizontal: 20,
    },

    errormsg : {
      color: 'red',
      marginHorizontal: 20,
      marginBottom: 20,
    },
    successmsg: {
      color: 'green',
      marginHorizontal: 20,
      marginBottom: 20,
    }


  });