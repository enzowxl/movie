import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS } from "../../constants";

export default function Load() {
  return (
    <View style={styles.cont}>
      <ActivityIndicator color={COLORS.secondary} size={50} />
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
    height: 150,
  },
});
