import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

function ImageButtons() {

    const takeImage = async () => {
        try {
            await ImagePicker.requestCameraPermissionsAsync()
        } catch (error) {
            
        }
    }

    return (
    <View style={styles.buttonsPosition}>
        <View style={styles.buttonsWrapper}>
            <TouchableOpacity style={styles.button} onPress={takeImage}>
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonText}>Take a picture</Text>
                  <Ionicons name="camera-outline" size={24} color="white" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonText}>Upload a picture</Text>
                  <MaterialIcons name="upload-file" size={24} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsPosition:{
    position:'absolute',
    top:'240%',
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
});

export default ImageButtons;
