import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

function ImageButtons({image, setImage}) {
    const [cameraPermission,setCameraPermission] = useState(true);
    const [galleryPermission,setGalleryPermission] = useState(true);

    const grabFromLibrary = async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if ( galleryStatus.status == 'granted' ) {
          let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled && result.assets && result.assets.length > 0) {
          setImage(result.assets[0].uri);
        }
      }
      else{
        setGalleryPermission(false);
      }
    }

    const grabFromCamera = async () => {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      if ( cameraStatus.status == 'granted' ) {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
          setImage(result.assets[0].uri);
        }
      }
      else{
        setCameraPermission(false);
      }
    }

    return (
    <View style={styles.buttonsPosition}>
        <View style={styles.buttonsWrapper}>
            <TouchableOpacity style={styles.button} onPress={grabFromCamera}>
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonText}>Take a picture</Text>
                  <Ionicons name="camera-outline" size={24} color="white" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={grabFromLibrary}>
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonText}>Upload a picture</Text>
                  <MaterialIcons name="upload-file" size={24} color="white" />
                </View>
            </TouchableOpacity>
        </View>
        {
          !cameraPermission && <Text style={styles.errorText}> You need to grant accsess to the camera </Text>
        }
        {
          !galleryPermission && <Text style={styles.errorText}> You need to grant accsess to galery </Text>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsPosition:{
    position:'absolute',
    top: '240%',
    left:'37%',
    transform: [{ translateX: -115 }],
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 20,
    borderRadius: 5,
    marginRight: 10,
    display:'flex',
    justifyContent:'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginRight: 5,
  },
  errorText:{
    color:'red'
  },
});

export default ImageButtons;
