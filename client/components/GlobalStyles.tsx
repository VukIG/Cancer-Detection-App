import { StyleSheet, Dimensions } from "react-native";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("window");

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: width * 0.05,
  },

  subtitle: {
    fontFamily: "System",
    color: "#695D5D",
    fontSize: 15,
    textAlign: "center",
    marginTop: height * 0.01,
    lineHeight: 20,
  },

  title: {
    fontFamily: "System",
    color: "#2B8CFF",
    fontSize: 32,
    marginTop: height * 0.05,
  },

  svg: {
    margin: height * 0.05,
  },

  buttonPrimary: {
    marginTop: height * 0.075,
    width: 195,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    text: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
    },
  },

  buttonSecondary: {
    marginTop: height * 0.01,
    borderWidth: 10,
    borderColor: "#5EA8FF",
    width: 195,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    text: {
      color: "#5EA8FF",
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
    },
  },
});

export default GlobalStyles;
