import { View, Text, Pressable, StyleSheet } from "react-native";
import GlobalStyles from "./GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import WelcomeSvg from "../assets/welcome.svg";

export default function WelcomeSlide() {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.container}>
        <WelcomeSvg width={350} height={350} style={GlobalStyles.svg} />
      </View>
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.title}>Welcome to CDA!</Text>
        <Text style={GlobalStyles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Text>
        <LinearGradient
          colors={["#5EA8FF", "#42C5FD"]}
          style={GlobalStyles.buttonPrimary}
        >
          <Pressable>
            <Text style={GlobalStyles.buttonPrimary.text}>Get started</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
}
