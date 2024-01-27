import React from "react";
import { View, Text } from "react-native";
import Swiper from "react-native-swiper";
import WelcomeSlide from "./WelcomeSlide";
import AllowCameraSlide from "./AllowCameraSlide";
import AllowGallerySlide from "./AllowGallerySlide";
import InputSlide from "./InputSlide";

export default function SlideViewer() {
  return (
    <Swiper>
      <WelcomeSlide />
      <AllowCameraSlide />
      <AllowGallerySlide />
      <InputSlide />
    </Swiper>
  );
}
