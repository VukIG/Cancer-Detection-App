import { SafeAreaView, View, Image, StyleSheet } from 'react-native';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import ImageButtons from './components/ImageButtons';
import { useState } from 'react';

export default function App() {
  const [image,setImage] = useState(false);
  console.log(image);
  return (
    <View style={{ flex: 1 }}> 
      <View style={{justifyContent: 'space-around'}}>
        {image ? <Image source={{uri: image}}/> : <Welcome />}
        <ImageButtons image={image} setImage={setImage} />
      </View>
      <Footer />      
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    bottom: 100, // Adjust this value as needed
    width: 400,
    height: 400,
  },
});
