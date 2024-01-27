import { StyleSheet, Dimensions } from "react-native";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("window");

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  subtitle: {
    fontFamily: "System",
    color: "#695D5D",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 20,
    margin: 10,
  },

  title: {
    fontFamily: "System",
    color: "#2B8CFF",
    fontSize: 32,
    textAlign: "center",
    margin: 10,
  },

  svg: {},

  buttonPrimary: {
    width: 195,
    height: 50,
    margin: 20,
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
    width: 195,
    height: 50,
    borderWidth: 1,
    borderColor: "#5EA8FF",
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
