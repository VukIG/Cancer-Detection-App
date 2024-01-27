import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GlobalStyles from "./GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import AllowGallerySvg from "../assets/allowgallery.svg";

export default function AllowGallerySlide() {
  return (
    <View style={GlobalStyles.container}>
      <AllowGallerySvg width={350} height={350} style={GlobalStyles.svg} />
      <View style={GlobalStyles.content}>
        <Text style={GlobalStyles.title}>Allow your gallery</Text>
        <Text style={GlobalStyles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Text>
        <LinearGradient
          colors={["#5EA8FF", "#42C5FD"]}
          style={GlobalStyles.buttonPrimary}
        >
          <TouchableOpacity>
            <Text style={GlobalStyles.buttonPrimary.text}>Enable Gallery</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity style={GlobalStyles.buttonSecondary}>
          <Text style={GlobalStyles.buttonSecondary.text}>Not now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
