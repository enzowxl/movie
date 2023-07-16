import React, { useContext } from "react";

import { View, StyleSheet } from "react-native";

import { Button } from "@rneui/themed";

import { COLORS } from "../../../constants";
import { MovieContext } from "../../../provider/movie";
import { useNavigation } from "@react-navigation/native";

export default function ButtonNextPage(props: any) {
  const movieContext = useContext(MovieContext);
  const n = useNavigation<any>()

  function NextPage() {

    movieContext.updatePage(movieContext.page + 1)
    n.replace('ListMovies')
    
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  cont: {
    shadowColor: COLORS.secondary,
    elevation: 5,
    position: "absolute",
    bottom: 30,
  },

  btn2: {
    borderRadius: 10,
    width: 150,
    backgroundColor: COLORS.secondary,
  },
});
