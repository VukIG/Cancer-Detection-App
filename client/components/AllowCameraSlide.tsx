import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GlobalStyles from "./GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import AllowCameraSvg from "../assets/allowcamera.svg";

export default function AllowCameraSlide() {
  return (
    <View style={GlobalStyles.container}>
      <AllowCameraSvg width={350} height={350} style={GlobalStyles.svg} />
      <View style={GlobalStyles.content}>
        <Text style={GlobalStyles.title}>Allow your camera</Text>
        <Text style={GlobalStyles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Text>
        <LinearGradient
          colors={["#5EA8FF", "#42C5FD"]}
          style={GlobalStyles.buttonPrimary}
        >
          <TouchableOpacity>
            <Text style={GlobalStyles.buttonPrimary.text}>Enable Camera</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity style={GlobalStyles.buttonSecondary}>
          <Text style={GlobalStyles.buttonSecondary.text}>Not now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
