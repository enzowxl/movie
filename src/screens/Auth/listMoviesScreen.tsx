import { useEffect, useState } from "react";

import {
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  ScrollView,
} from "react-native";

import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
  Jost_700Bold,
} from "@expo-google-fonts/jost";

import { COLORS, CONFIG, api } from "../../constants";

import { Header } from "../../components/Auth/Header";

import Splash from "../../components/Splash";
import MoviesList from "../../components/Auth/MoviesList";
import HeaderCenter from "../../components/Auth/Header/HeaderCenter";

import { useNavigation } from "@react-navigation/native";
import ButtonNextPage from "../../components/Auth/ButtonNextPage";

export default function ListMoviesScreen({ data, route }: any) {
  const params = route.params;

  const title = data?.title ? data?.title : params?.data?.title;

  const n = useNavigation<any>();

  const [response, updateResponse] = useState<any>();
  const [loading, updateLoading] = useState(true);

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
          url: data?.url ? data?.url : params?.data?.url,
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
  }, [data]);

  if (loading) return <Splash />;

  if (!fontLoaded) return <Splash />;

  return (
    <View style={styles.cont}>
      <Header.Root backGround>
        <Header.Left
          onClick={() => {
            n.goBack();
          }}
          image={require("../../assets/Header/previous-green.png")}
        />
        <HeaderCenter text={title?.toUpperCase()} />
        <View style={{ width: 30 }} />
      </Header.Root>

      <View
        style={{
          flex: 1,
          marginTop: 100,
          alignItems: "center",
        }}
      >
        <MoviesList
          page={data?.page ? data?.page : params?.data?.page}
          data={response}
        />
        {data?.page || params?.data?.page ? <ButtonNextPage /> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
