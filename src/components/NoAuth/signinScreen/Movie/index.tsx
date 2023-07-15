import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";
import AnimatedLottieView from "lottie-react-native";

export default function Movie() {
  return (
    <AnimatedLottieView
      autoPlay
      loop={true}
      style={styles.load}
      source={require("../../../../assets/animations/movie.json")}
    />
  );
}

const styles = StyleSheet.create({
  load: {
    width: 150,
    height: 150,
    marginTop: 5,
  },
});
