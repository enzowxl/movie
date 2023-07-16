import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import AnimatedLottieView from "lottie-react-native";

export default function Splash() {
  return (
    <View style={styles.cont}>
      <AnimatedLottieView
        autoPlay
        loop={true}
        style={styles.load}
        source={require("../../assets/animations/loading.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },

  load: {
    width: 150,
    height: 150
  },
});
