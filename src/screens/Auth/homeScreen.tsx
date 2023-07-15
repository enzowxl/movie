import { useContext, useState } from "react";

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

import { COLORS } from "../../constants";

import { Header } from "../../components/Auth/Header";
import Splash from "../../components/Splash";
import List from "../../components/Auth/List";
import HeaderCenter from "../../components/Auth/Header/HeaderCenter";
import { useNavigation } from "@react-navigation/native";
import { MovieContext } from "../../provider/movie";

export default function HomeScreen() {

  const movieContext = useContext(MovieContext)

  const n = useNavigation<any>();

  const [fontLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_400Regular,
  });

  if (!fontLoaded) return <Splash />;

  return (
    <View style={styles.cont}>
      <Header.Root backGround>
        <Header.Left
          onClick={() => {
            n.openDrawer();
          }}
          image={require("../../assets/Header/menu.png")}
        />

        <HeaderCenter text="HOME" />

        <Header.Right
          onClick={() => {}}
          image={require("../../assets/Header/search.png")}
        />
      </Header.Root>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
      >
        <View style={{ marginTop: 100, marginBottom: 60 }}>
          <List
            title="Trends"
            url={`trending/movie/${movieContext.time}?language=${movieContext.language}`}
          />

          <List
            title="Popular"
            url={`movie/popular?language=${movieContext.language}&page=${movieContext.page}`}
          />

          <List
            title="In theaters"
            url={`movie/now_playing?language=${movieContext.language}&page=${movieContext.page}`}
          />

          <List
            title="Upcoming"
            url={`movie/upcoming?language=${movieContext.language}&page=${movieContext.page}`}
          />

          <List
            title="Top rated"
            url={`movie/top_rated?language=${movieContext.language}&page=${movieContext.page}`}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
