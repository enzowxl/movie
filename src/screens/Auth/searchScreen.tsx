import { View, StyleSheet, Text, TextInput } from "react-native";
import { COLORS, CONFIG, api } from "../../constants";
import { Header } from "../../components/Auth/Header";
import { Input } from "@rneui/themed";
import React, { useRef, useState, useEffect, useContext } from "react";
import { MovieContext } from "../../provider/movie";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
  Jost_700Bold,
} from "@expo-google-fonts/jost";


import ListSearch from "../../components/Auth/ListSearch";
import Splash from "../../components/Splash";

export default function SearchScreen({ route }: any) {
  const inputRef = useRef<any>(null);
  const [search, updateSearch] = useState("");
  const [response, updateResponse] = useState<any>({});
  const [loading, updateLoading] = useState(true);

  const movieContext = useContext(MovieContext);

  const [fontLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_400Regular,
  });

  useEffect(() => {
    updateLoading(true);
    (async () => {
      await api
        .request({
          url: `search/movie?query=${search}&language=${movieContext.language}&page=${movieContext.page}`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(function (res) {
          updateResponse(res.data.results);
          updateLoading(false);
        });
    })();
  }, [search]);

  if (!fontLoaded) return <Splash />;

  return (
    <View style={styles.cont}>
      <Header.Root backGround>
        <Header.Left
          onClick={() => {
            inputRef?.current.blur();
          }}
          image={require("../../assets/Header/search.png")}
        />

        <Input
          ref={inputRef}
          placeholder="Search movie"
          value={search}
          onChangeText={(t) => updateSearch(t)}
          placeholderTextColor={COLORS.gray}
          inputContainerStyle={styles.inputCont}
          inputStyle={styles.inputStyle}
          containerStyle={styles.contStyle}
        />
      </Header.Root>
      {loading ? (
        <Splash />
      ) : (
        <View style={{ marginTop: 100 }}>
          <ListSearch data={response} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  inputStyle: {
    borderBottomWidth: 0,
    fontFamily: "Jost_700Bold",
    textAlign: "left",
    color: COLORS.white,
    fontSize: 16,
    paddingHorizontal: 5,
  },
  inputCont: {
    borderBottomWidth: 1,
    borderColor: COLORS.secondary,
  },
  contStyle: {
    width: 300,
    height: 50,
  },
});
