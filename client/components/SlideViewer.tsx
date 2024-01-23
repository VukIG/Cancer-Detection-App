import React from "react";
import { View, Text } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import WelcomeSlide from "./WelcomeSlide";
import GlobalStyles from "./GlobalStyles";

export default function SlideViewer() {
  const pages = [
    <WelcomeSlide key={1} />,
    <View key={2}>
      <Text>sdgafsdgf 2</Text>
    </View>,
    <View key={3}>
      <Text>Page 3</Text>
    </View>,
  ];

  return (
    <ViewPager style={GlobalStyles.container} initialPage={0}>
      {pages}
    </ViewPager>
  );
}
