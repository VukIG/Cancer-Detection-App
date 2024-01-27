import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SlideViewer from "./screens/SlideViewer";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="slide-viewer" component={SlideViewer} />
    </Stack.Navigator>
  );
}

export default MyStack;
