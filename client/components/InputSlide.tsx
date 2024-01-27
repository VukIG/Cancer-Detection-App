import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import GlobalStyles from "./GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import CameraIconSvg from "../assets/camera-icon.svg";
import GalleryIconSvg from "../assets/gallery-icon.svg";

export default function InputSlide() {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.content}>
        <Text style={GlobalStyles.title}>Welcome to CDA!</Text>
        <Text style={GlobalStyles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Text>
      </View>
      <View
        style={{
          ...GlobalStyles.content,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <LinearGradient
          colors={["#5EA8FF", "#42C5FD"]}
          style={{ ...GlobalStyles.buttonPrimary, width: 150 }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", justifyContent: "center" }}
          >
            <CameraIconSvg width={25} height={25} style={{}} />
            <Text style={GlobalStyles.buttonPrimary.text}>Take a picture</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity
          style={{
            ...GlobalStyles.buttonSecondary,
            flexDirection: "row",
            justifyContent: "center",
            width: 150,
          }}
        >
          <GalleryIconSvg width={25} height={25} style={{}} />
          <Text style={GlobalStyles.buttonSecondary.text}>Open gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
