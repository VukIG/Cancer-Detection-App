import React from "react";
import Swiper from "react-native-swiper";
import WelcomeSlide from "./slides/WelcomeSlide";
import AllowCameraSlide from "./slides/AllowCameraSlide";
import AllowGallerySlide from "./slides/AllowGallerySlide";
import InputSlide from "./slides/InputSlide";

export default function SlideViewer() {
  return (
    <Swiper loop={false}>
      <WelcomeSlide />
      <AllowCameraSlide />
      <AllowGallerySlide />
      <InputSlide />
    </Swiper>
  );
}
