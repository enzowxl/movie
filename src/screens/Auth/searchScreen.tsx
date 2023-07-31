import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, CONFIG, api } from "../../constants";
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
import SearchInfo from "../../components/Auth/SearchInfo";
import InputSearch from "../../components/Auth/InputSearch";
import { Header } from "../../components/Auth/Header";

export default function SearchScreen({ route }: any) {
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
        })
        .catch((e) => console.log(e));
    })();
  }, [search]);

  if (!fontLoaded) return <Splash />;

  return (
    <View style={styles.cont}>
      <InputSearch update={updateSearch} value={search} />

      {loading ? (
        <Splash />
      ) : search.length === 0 ? null : (
        <ListSearch data={response} />
      )}
      {!loading && search.length === 0 ? <SearchInfo /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
