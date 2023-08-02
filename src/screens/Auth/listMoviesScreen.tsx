import { useContext, useEffect, useState } from "react";

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

import Load from "../../components/Load";
import MoviesList from "../../components/Auth/MoviesList";
import HeaderCenter from "../../components/Auth/Header/HeaderCenter";

import { useNavigation } from "@react-navigation/native";
import ButtonPage from "../../components/Auth/ButtonPage";
import { MovieContext } from "../../provider/movie";

export default function ListMoviesScreen({ data, route }: any) {
  const params = route.params;

  const title = data?.title ? data?.title : params?.data?.title;
  const url = data?.url ? data?.url : params?.data?.url;

  const n = useNavigation<any>();

  const [response, updateResponse] = useState<any>();
  const [loading, updateLoading] = useState(true);

  const [page, updatePage] = useState(1);

  const [fontLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_400Regular,
  });

  useEffect(() => {
    updateLoading(true);
    updatePage(1);
    (async () => {
      await api
        .request({
          url: `${url}&page=${page}`,
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
  }, [data]);

  useEffect(() => {
    updateLoading(true);
    (async () => {
      await api
        .request({
          url: `${url}&page=${page}`,
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
  }, [page]);

  function NextPage() {
    updatePage(page + 1);
  }

  function PreviousPage() {
    updatePage(page - 1);
  }

  if (loading) return <Load />;

  if (!fontLoaded) return <Load />;

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
        {page >= 2 ? (
          data?.page || params?.data?.page ? (
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                bottom: 30,
                marginHorizontal: 30,
              }}
            >
              <ButtonPage
                type="previous"
                PreviousPage={PreviousPage}
                NextPage={NextPage}
              />
              <ButtonPage type="next" PreviousPage={null} NextPage={NextPage} />
            </View>
          ) : null
        ) : data?.page || params?.data?.page ? (
          <View style={{ position: "absolute", bottom: 30 }}>
            <ButtonPage type="next" PreviousPage={null} NextPage={NextPage} />
          </View>
        ) : null}
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
