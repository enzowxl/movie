import React, { useContext, useState } from "react";

import { View, StyleSheet } from "react-native";

import { Button } from "@rneui/themed";

import { COLORS } from "../../../constants";
import { MovieContext } from "../../../provider/movie";
import { useNavigation } from "@react-navigation/native";

interface ButtonPageProps {
  NextPage: any;
  PreviousPage: any;
  type: string;
}

export default function ButtonPage({ NextPage, type, PreviousPage }: ButtonPageProps) {
  return (
    <>
      {
        type === 'next'
        ?
        <Button
        onPress={NextPage}
        buttonStyle={styles.btn2}
        containerStyle={styles.cont}
        titleStyle={{
          color: COLORS.primary,
          fontFamily: "Jost_600SemiBold",
        }}
        title={"NEXT PAGE"}
      />
      :
      <Button
      onPress={PreviousPage}
      buttonStyle={styles.btn2}
      containerStyle={styles.cont}
      titleStyle={{
        color: COLORS.primary,
        fontFamily: "Jost_600SemiBold",
      }}
      title={"PREVIOUS PAGE"}
    />
      }
    </>
  )
}

const styles = StyleSheet.create({
  cont: {
    marginHorizontal:20
  },

  btn2: {
    borderRadius: 10,
    width: 150,
    backgroundColor: COLORS.secondary,
  },
});
