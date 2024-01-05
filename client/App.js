import { View, Image, StyleSheet } from "react-native";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import SendButton from "./components/SendButton";
import ImageButtons from "./components/ImageButtons";
import { useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  console.log(image);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "space-around" }}>
        {image ? (
          <View>
            <SendButton image={image} prediction={prediction} setPrediction={setPrediction} />
            {prediction ? 
              <View><Text>{prediction}</Text></View>:
              <Image source={{ uri: image }} style={styles.image} />
            }
          </View>
        ) : (
          <Welcome />
        )}
        <ImageButtons image={image} setImage={setImage} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 200,
    marginLeft: 6,
    width: 400,
    height: 400,
  },
});
