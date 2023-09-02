import React, {useContext, useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../contexts/AppProvider'


export default function Message({message,userID, setShowDeletion, showDeletion}) {

    const {accessToken} = useContext(AuthContext);
    
   
    if(userID == accessToken.userID){
        console.log('equal')
    }

    const handleDelete = () =>{
        setShowDeletion(true);
    }


  return (
    <View style={styles.container}>
        {userID == accessToken.userID
        ? ( <View style={styles.right}>
                <TouchableOpacity onPress={()=> handleDelete()}>
                <Text style={styles.textConten}>{message.content}</Text>
                <Text>{message.date}</Text>
                </TouchableOpacity>
            </View>) 
        : (<View style={styles.left}>
            <Text style={styles.textConten}>{message.content}</Text>
            <Text>{message.date}</Text>
         </View>)
        }
        
        {/* <TouchableOpacity onPress={()=> userID === accessToken.userID ? handleDelete() : null}>
            <Text style={userID === accessToken.userID ? styles.right : styles.left} >
             {message}
            </Text>
        </TouchableOpacity> */}
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    right: {
        backgroundColor: 'green',
        color: 'green',
        alignSelf: 'flex-end',
        marginBottom: 10,
        width: '50%',
        borderRadius: 10,
    },
    left: {
        backgroundColor: 'gray',
        alignItems: 'flex-start',
        color: 'green', 
        marginBottom: 10,
        width: '50%',
        borderRadius: 10,
    },

    textConten : {
        margin: 10,
    },
    
})
