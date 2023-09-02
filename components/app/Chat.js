import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { AuthContext } from '../contexts/AppProvider';
import { MaterialIcons,Ionicons } from '@expo/vector-icons';


import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import Message from './Message';

export default function Chat() {
  const [allMessages, setAllMessages] = useState(null);
  const URL = 'https://chat-api-with-auth.up.railway.app/messages'
  const {accessToken} = useContext(AuthContext);
  const [newMessage, setNewMessage] = useState('');
  const [showDeletion, setShowDeletion] = useState(false);

  const fetchData = async() =>{
    try{
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + accessToken.accessToken,
        }
      });
      const result = await response.text();

      setAllMessages(JSON.parse(result).data.reverse());

    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])


  //trebam ovo napravit

  /* const deleteMessage = async() =>{
    try{

    }catch(error)
  } */

  const handleSendMessage = async() =>{
    try{
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + accessToken.accessToken,
        },
        body: JSON.stringify({
          content: newMessage,
        }),
      })

      const result = await response.json();
      if(result.status == '201'){
        fetchData();
      }
      console.log('result',result);
    }catch(error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <FlatList
      data = {allMessages}
      inverted
      renderItem={({item}) => (item.user != null 
        && <Message key={item._id} message={item} userID={item.user._id} setShowDeletion={setShowDeletion} showDeletion={showDeletion} />)}
      keyExtractor={item => item.id}
      >
      </FlatList>

      {showDeletion
        ? <View style={styles.deletionBox}>
            <MaterialIcons name="delete" size={24} color="black" /* onPress={()=>deleteMessage()} */ />
            <Ionicons name="close" size={24} color="black" />
          </View>
        : <View style={styles.kontent}>
          <TextInput 
            style={styles.input} 
            placeholder='Message...' 
            value={newMessage} 
            onChangeText={(text)=>setNewMessage(text)}>
            </TextInput>
          <TouchableOpacity onPress={()=> handleSendMessage()}>
            <FontAwesome name="send" size={25} color="blue" />
          </TouchableOpacity>
          </View>}
      
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
        width: '80%',
        marginVertical: 10,
        },

    kontent: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      columnGap: 15,
      justifyContent: 'center',
      alignItems: 'center',
      /* marginLeft: 10, */
      /* marginRight: 10, */
    },
    deletionBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'red',
      padding: 10,
      marginVertical: 10,
  }


});