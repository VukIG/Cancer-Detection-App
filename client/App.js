import { NavigationContainer } from "@react-navigation/native"; 
import { View, Text } from "react-native";
import React from "react";
import MyStack from "./components/Navigator";

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
