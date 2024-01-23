import { StyleSheet, Dimensions } from "react-native";
import { useFonts } from "expo-font";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },

  text: {
    fontFamily: "System",
    color: "#695D5D",
    fontSize: 16,
    paddingBottom: 20,
  },

  heading: {
    fontFamily: "System",
    color: "#2B8CFF",
    fontSize: 26,
    paddingBottom: 10,
  },

  buttonPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 5,
    text: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
    },
  },
});

export default GlobalStyles;
