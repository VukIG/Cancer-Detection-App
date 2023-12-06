import { SafeAreaView, View } from 'react-native';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import ImageButtons from './components/ImageButtons';
export default function App() {
  return (
    <View style={{ flex: 1 }}> 
      <View style={{justifyContent: 'space-aroun'}}>
        <Welcome />
        <ImageButtons />
      </View>
      <Footer />      
    </View>
  );
}