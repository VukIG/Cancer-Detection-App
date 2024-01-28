import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import axios from "axios";

function SendButton({ image, prediction,setPrediction }) {
    const formData = new FormData();
    formData.append('image', {
      uri: image,
      type: 'image/jpeg',
      name: 'test.jpg', 
    });
  const sendToServer = async () => {
    axios
      .post("http://192.168.1.6:8000/predict", formData)
      .then((response) => {
        setPrediction(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.sendWrapper}>
      <TouchableOpacity style={styles.button} onPress={sendToServer}>
        <Text style={styles.buttonText}>Scan the image</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SendButton;

const styles = StyleSheet.create({
  sendWrapper: {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: [{ translateX: -130 }, { translateY: 20 }],
  },
  button: {
    backgroundColor: "#4a90e2",
    padding: 30,
    borderRadius: 5,
    marginRight: 10,
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    marginRight: 5,
    fontSize: 30,
  },
});
