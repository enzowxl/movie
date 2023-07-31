import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Header } from "../../components/Auth/Header";
import { COLORS, CONFIG, api, apiServer } from "../../constants";
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
import Providers from "../../components/Auth/Providers";
import { AuthContext } from "../../provider";

export default function MovieScreen({ movieId, route }: any) {
  const params = route.params;

  const movieContext = useContext(MovieContext);
  const { user } = useContext(AuthContext);

  const { width } = useWindowDimensions();

  const [response, updateResponse] = useState<any>({});
  const [cast, updateCast] = useState<any>({});
  const [recommendations, updateRecommendations] = useState<any>({});
  const [provider, updateProvider] = useState<any>({});
  const [loading, updateLoading] = useState(true);

  const [heart, updateHeart] = useState(false);
  const [idDB, updateIdDB] = useState<any>();

  const n = useNavigation<any>();

  useEffect(() => {
    updateLoading(true);
    (async () => {
      await api
        .request({
          url: `movie/${params?.movieId ? params?.movieId : movieId}?language=${
            movieContext.language
          }`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(function (res) {
          updateResponse(res.data);
        })
        .catch((e) => console.log(e));

      await api
        .request({
          url: `movie/${
            params?.movieId ? params?.movieId : movieId
          }/credits?language=${movieContext.language}`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(function (res) {
          updateCast(res.data.cast);
        })
        .catch((e) => console.log(e));

      await api
        .request({
          url: `movie/${
            params?.movieId ? params?.movieId : movieId
          }/recommendations?language=${movieContext.language}&page=${
            movieContext.page
          }`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(function (res) {
          updateRecommendations(res.data.results);
        })
        .catch((e) => console.log(e));

      await api
        .request({
          url: `movie/${
            params?.movieId ? params?.movieId : movieId
          }/watch/providers`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(function (res) {
          const locale = movieContext.language.split("-")[1];
          updateProvider(res.data.results[locale]?.flatrate);
        })
        .catch((e) => console.log(e));

      await apiServer
        .get("details/favorites", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        })
        .then((res) => {
          let filter = res.data.find(
            (d: any) =>
              d.movie_id === (params?.movieId ? params?.movieId : movieId)
          );
          if (filter) {
            updateHeart(true);
            updateIdDB(filter.id);
            return;
          } else {
            updateHeart(false);
            updateIdDB(null);
            return;
          }
        })
        .catch((e) => console.log(e));

      updateLoading(false);
    })();
  }, [movieId]);

  if (loading) return <Splash />;

  async function addMovieFavorite(data: any) {
    if (idDB !== null) {
      await apiServer
        .delete("delete/favorites", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          params: {
            favorite_id: idDB,
          },
        })
        .then((res) => {
          updateHeart(false);
          updateIdDB(null);
          ToastAndroid.show("Removed the favorite", ToastAndroid.SHORT);
        })
        .catch((e) => console.log(e));
      return;
    }
    await apiServer
      .post(
        "create/favorites",
        {
          name: data.original_title,
          movie_id: data.id,
          url_post: data.poster_path,
          user_id: user?.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((res) => {
        updateHeart(true);
        ToastAndroid.show("Added the favorite", ToastAndroid.SHORT);
      })
      .catch((e) => console.log(e));
  }

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
          onClick={() => addMovieFavorite(response)}
          image={
            heart
              ? require("../../assets/Header/heart-favorite-full.png")
              : require("../../assets/Header/heart-favorite.png")
          }
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

        {provider === undefined ? null : <Providers data={provider} />}

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
  cont2: {
    position: "absolute",
    bottom: 0,
    height: "45%",
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
