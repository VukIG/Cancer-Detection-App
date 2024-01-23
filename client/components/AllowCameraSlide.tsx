import { View, Text, Pressable, StyleSheet } from "react-native";
import GlobalStyles from "./GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import WelcomeSvg from "../assets/welcome.svg";

export default function AllowCameraSlide() {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.container}>
        <WelcomeSvg width={350} height={350} style={GlobalStyles.svg} />
      </View>
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.title}>Allow your camera</Text>
        <Text style={GlobalStyles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Text>
        <LinearGradient
          colors={["#5EA8FF", "#42C5FD"]}
          style={GlobalStyles.buttonPrimary}
        >
          <Pressable>
            <Text style={GlobalStyles.buttonPrimary.text}>Enable Camera</Text>
          </Pressable>
        </LinearGradient>
        <Pressable>
          <Text style={GlobalStyles.buttonSecondary.text}>Not now</Text>
        </Pressable>
      </View>
    </View>
  );
}
