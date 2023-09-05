import React, { useContext, useState, useEffect,   } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native'
import { AuthContext } from '../contexts/AppProvider';



export default function Profile({navigation}) {
  const SPECIFICURL = ' https://chat-api-with-auth.up.railway.app/users';
  const {accessToken} = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [updateStatus, setUpdateStatus] = useState('');



      /*log out  */
  const handleLogOut = () => {
    navigation.navigate('Login', { action: 'logout' });
  }



  /* fetch  */
  const fetchSpecificUser = async () => {
    try{
      const response = await fetch(SPECIFICURL, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer' + accessToken.accessToken,
        },
      });

      const result = await response.json();
      if (result.status === '200') {
        if(result.data.firstName) {
          setFirstName(result.data.firstName)
        }
        if(result.data.lastName) {
          setLastName(result.data.lastName);
        }
      }

    }catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSpecificUser();
  }, []);


  /* update function */
  const updateUser = async () => {
    try { 
      const response = await fetch(SPECIFICURL, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken.accessToken,
        },
        body: JSON.stringify({
          'firsname': firstName,
          'lastname': lastName,
        }),
      });

      const result = await response.json();
      if(result.status === '200') {
        setUpdateStatus('Update successfully!');
      } else {
        setUpdateStatus('Update Fail!!');
      }

    }catch(error) {
      console.log(error);
      setUpdateStatus('Update Fail!!');
    }
  }


  /* delete function */

  const deleteUser = async() => {
    try{
      const response = await fetch(SPECIFICURL, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + accessToken.accessToken,
        },
      });

      const result = await response.json();
      if(result.status === '200') {
        handleLogOut();
        navigation.navigate("Login");
      }

    }catch(error) {
      console.log(error);
  }
}


  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Profile</Text>

        <Image  style={styles.img}
        source={require('../../assets/favicon.png')}></Image>

        <TextInput 
         style={styles.inputFirstName} 
         placeholder='Firstname'
         value={firstName}
         onChangeText={(text) => setFirstName(text)}
         />

         {updateStatus !== '' && (
          <Text style={updateStatus === 'Update successfully!' ? styles.successText : styles.errorText}>
            {updateStatus}
          </Text>
         )}


        <TextInput 
         style={styles.inputLastName} 
         placeholder='Lastname'
         value={lastName}
         onChangeText={(text) => setLastName(text)}
        />

         {updateStatus !== '' && (
          <Text style={updateStatus === 'Update successfully!' ? styles.successText : styles.errorText}>
            {updateStatus}
          </Text>
         )}


        <TouchableOpacity style={styles.updateButton}  onPress={updateUser}>
        <Text>Update</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={deleteUser}>
        <Text>Delete</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
        <Text>Logout</Text>

      </TouchableOpacity>


    </View>
  );
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

    inputFirstName: {
      borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 20,
    },

    inputLastName: {
      borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 20,
    },

    updateButton: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: 'green',
    },

    deleteButton: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginVertical: 20,
      marginHorizontal: 20,
      backgroundColor: 'red',
  },

  logoutButton: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: 'grey',
},

img: {
  alignSelf: 'center',
  width: 100,
  height: 100,
  marginVertical: 20,
  marginHorizontal: 20,
},

});
