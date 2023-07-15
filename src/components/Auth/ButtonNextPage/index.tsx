import React from "react";

import { View, StyleSheet } from "react-native";

import { Button } from "@rneui/themed";

import { COLORS } from "../../../constants";

export default function ButtonNextPage(props: any) {
    
  return (
      <Button
        onPress={props.nextScroll}
        buttonStyle={styles.btn2}
        containerStyle={styles.cont}
        titleStyle={{
          color: COLORS.primary,
          fontFamily: "Jost_600SemiBold",
        }}
        title={"NEXT PAGE"}
      />
  );
}

const styles = StyleSheet.create({
  cont: {
    shadowColor: COLORS.secondary,
    elevation: 5,
    position: 'absolute',
    bottom: 30,
  },

  btn2: {
    borderRadius: 10,
    width: 150,
    backgroundColor: COLORS.secondary,

  },
});
