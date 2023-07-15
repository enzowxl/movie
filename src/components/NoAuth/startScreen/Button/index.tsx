import React from "react";

import { View, StyleSheet } from "react-native";

import { Button } from "@rneui/themed";

import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
} from "@expo-google-fonts/jost";

import { COLORS } from "../../../../constants";

import Splash from "../../../Splash";

export default function StartScreenButton(props: any) {
  const [fontLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  });

  if (!fontLoaded) {
    return <Splash />;
  }

  return (
    <View style={styles.cont}>
      {props.index >= 1 ? (
        <Button
          onPress={props.previousScroll}
          buttonStyle={[
            styles.btn2,
            {
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: COLORS.secondary,
            },
          ]}
          containerStyle={styles.btn}
          titleStyle={{
            fontFamily: "Jost_600SemiBold",
          }}
          title="BACK"
        />
      ) : null}

      <Button
        onPress={props.nextScroll}
        buttonStyle={styles.btn2}
        containerStyle={styles.btn}
        titleStyle={{
          color: COLORS.primary,
          fontFamily: "Jost_600SemiBold",
        }}
        title={props.index === props.data.length - 1 ? "GO" : "NEXT"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },

  btn: {
    marginHorizontal: 20,
  },
  btn2: {
    borderRadius: 10,
    width: 150,
    backgroundColor: COLORS.secondary,
  },
});
