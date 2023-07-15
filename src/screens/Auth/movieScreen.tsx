import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../components/Auth/Header";
import { COLORS, CONFIG, api } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import Genres from "../../components/Auth/Genres";
import Splash from "../../components/Splash";
import Cast from "../../components/Auth/Cast";
import Recommendations from "../../components/Auth/Recommendations";
import Overview from "../../components/Auth/Overview";
import MovieTitles from "../../components/Auth/MovieTitles";
import MovieImage from "../../components/Auth/MovieImage";
import { MovieContext } from "../../provider/movie";

export default function MovieScreen({ movieId }: any) {

  const movieContext = useContext(MovieContext)

  const { width } = useWindowDimensions();

  const [response, updateResponse] = useState<any>({});
  const [cast, updateCast] = useState<any>();
  const [recommendations, updateRecommendations] = useState<any>();
  const [loading, updateLoading] = useState(true);

  const n = useNavigation<any>();

  useEffect(() => {
    updateLoading(true);
    (async () => {
      await api
        .request({
          url: `movie/${movieId}?language=en-US`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(function (res) {
          updateResponse(res.data);
        });

      await api
        .request({
          url: `movie/${movieId}/credits?language=en-US`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(function (res) {
          updateCast(res.data.cast);
        });

      await api
        .request({
          url: `movie/${movieId}/recommendations?language=${movieContext.language}&page=${movieContext.page}`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(function (res) {
          updateRecommendations(res.data.results);
        });

      updateLoading(false);
    })();
  }, [movieId]);

  if (loading) return <Splash />;

  return (
    <View style={styles.cont}>
      <Header.Root backGround={false}>
        <Header.Left
          onClick={() => {
            n.goBack();
          }}
          image={require("../../assets/Header/previous-green.png")}
        />
        <Header.Center text="MOVIE DETAIL" />
        <Header.Right
          onClick={() => {}}
          image={require("../../assets/Header/heart-favorite.png")}
        />
      </Header.Root>

      <MovieImage response={response?.poster_path} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.cont2, { width }]}
      >
        <MovieTitles response={response} />

        {response?.genres?.length === 0 ? null : (
          <Genres data={response?.genres} />
        )}

        {response?.overview?.length === 0 ? null : (
          <Overview response={response} />
        )}

        {cast?.length === 0 ? null : <Cast data={cast} />}

        {recommendations?.length === 0 ? null : (
          <Recommendations data={recommendations} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  img: {
    height: "60%",
  },
  cont2: {
    position: "absolute",
    bottom: 0,
    height: "45%",
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
