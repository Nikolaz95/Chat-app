import React, {useState, useEffect, useRef, useContext} from 'react'
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useIsFocused } from '@react-navigation/native';
import { AuthContext } from '../contexts/AppProvider';


import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function CameraApp() {


  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);
  const isFocused = useIsFocused();
  const {setProfileImage} = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const CameraPermissions = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(CameraPermissions.status == 'granted')
      console.log(CameraPermissions);

      const MediaPermissions = await MediaLibrary.requestPermissionsAsync();
      setHasMediaPermission(MediaPermissions.status == 'granted')
       console.log(MediaPermissions);
    })();
  }, );




  const cameraRef = useRef(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const picture = await cameraRef.current.takePictureAsync()
        console.log(picture);
        setPicture(picture)
      } catch (error) {
        console.log(error);
      }
    }
  }



  const [picture, setPicture] = useState(null);

  const savePicture = async () => {
    try {
      const asset = await MediaLibrary.createAssetAsync(picture.uri)
      
      const album = await MediaLibrary.getAlbumAsync('Expo');

      if (album == null) {
        await MediaLibrary.createAlbumAsync('Expo', asset, false)
      } else {
        await MediaLibrary.addAssetsToAlbumAsync(asset, album.id, false);
      }

      setProfileImage(picture.uri);
      setPicture(null)
    } catch (error) {
      console.log(error)
    }
  }


  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  const toggleFlash = () => {
    setFlash(current => (current === FlashMode.off ? FlashMode.on : FlashMode.off));
  }


  if (hasCameraPermission === null || hasMediaPermission === null) {
    return (<View><Text>Waiting for permissions....</Text></View>);
  }
  if (hasCameraPermission === false || hasMediaPermission === false) {
    return (<View><Text>Permissions denied....</Text></View>);
  }


  if (picture !== null) { 
   return( <SafeAreaView style={styles.container}>
    <Image source={{uri: picture.uri}}  style={{flex: 1}}/>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.generalButton}>
         <Feather name="trash-2" size={25} color="white" onPress={() => setPicture(null)}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.generalButton}>
         <FontAwesome name="save" size={25} color="white"  onPress={() => savePicture()}/>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
   )
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {isFocused
        && <Camera style={styles.cameraContainer} 
        type={type} 
        flashMode={flash} 
        ref={cameraRef}>

      <View style={styles.buttonsTopContainer}>

     <TouchableOpacity style={styles.generalButton}>
      <FontAwesome name="refresh" size={24} color="white" onPress={() => toggleCameraType()}/>
      </TouchableOpacity>

     <TouchableOpacity style={styles.generalButton}>
       <Entypo name="flash" size={25} color={flash === FlashMode.off ? 'white' : 'yellow'} onPress={() => toggleFlash()}/>
      </TouchableOpacity>

   </View>
    <View style={styles.buttonsBottomContainer}>
       <TouchableOpacity style={styles.cameraButton}>
           <Entypo name="camera" size={25} color="white" onPress={() => takePicture()} />
       </TouchableOpacity>
   </View>
</Camera>}
          
      </SafeAreaView>
    )
    
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center'
  },
  cameraContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  buttonsTopContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonsBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },

  generalButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 50,
    height: 50,
    marginRight: 5,
  },
  cameraButton: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginLeft: 20,
  }
});