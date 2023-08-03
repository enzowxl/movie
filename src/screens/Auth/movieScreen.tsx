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
import Load from "../../components/Load";
import Cast from "../../components/Auth/Cast";
import Recommendations from "../../components/Auth/Recommendations";
import Overview from "../../components/Auth/Overview";
import MovieTitles from "../../components/Auth/MovieTitles";
import MovieImage from "../../components/Auth/MovieImage";
import { MovieContext } from "../../provider/movie";
import Providers from "../../components/Auth/Providers";
import { AuthContext } from "../../provider";
import ModalOptions from "../../components/Auth/Modals/ModalOptions";
import ModalOptionsBottom from "../../components/Auth/Modals/ModalOptionsBottom";
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ["fashion", "clothing"],
});

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

  const [dotsVisible, updateDotsVisible] = useState(false);

  const [heart, updateHeart] = useState(false);
  const [list, updateList] = useState(false);

  const n = useNavigation<any>();

  const options = [
    {
      id: 1,
      name: heart ? "Remove Favorite" : "Add Favorite",
      onPress: () => addMovieFavorite(response),
      icon: heart
        ? require("../../assets/Header/heart-favorite-full.png")
        : require("../../assets/Header/heart-favorite.png"),
    },
    {
      id: 2,
      name: list ? "Remove WatchList" : "Add WatchList",
      onPress: () => addMovieWatchList(response),
      icon: require("../../assets/User/file.png"),
    },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
        interstitial.show();
      }
    );

    interstitial.load();

    return unsubscribe;
  }, [movieId]);

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
            return;
          } else {
            updateHeart(false);
            return;
          }
        })
        .catch((e) => {});

      await apiServer
        .get("details/watchList", {
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
            updateList(true);
            return;
          } else {
            updateList(false);
            return;
          }
        })
        .catch((e) => {});

      updateLoading(false);
    })();
  }, [movieId]);

  if (!loaded) return <Load />;

  if (loading) return <Load />;

  async function addMovieFavorite(data: any) {
    if (heart) {
      await apiServer
        .get("details/favorites", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        })
        .then(async (res) => {
          let filter = res.data.find(
            (d: any) =>
              d.movie_id === (params?.movieId ? params?.movieId : movieId)
          );
          await apiServer
            .delete("delete/favorites", {
              headers: {
                Authorization: `Bearer ${user?.token}`,
              },
              params: {
                favorite_id: filter.id,
              },
            })
            .then((res) => {
              updateHeart(false);
              //ToastAndroid.show("Removed the favorite", ToastAndroid.SHORT);
            })
            .catch((e) => console.log(e));
        })
        .catch((e) => {});
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
        console.log(res.data);
        updateHeart(true);
        //ToastAndroid.show("Added the favorite", ToastAndroid.SHORT);
      })
      .catch((e) => console.log(e));
  }

  async function addMovieWatchList(data: any) {
    if (list) {
      await apiServer
        .get("details/watchList", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        })
        .then(async (res) => {
          let filter = res.data.find(
            (d: any) =>
              d.movie_id === (params?.movieId ? params?.movieId : movieId)
          );
          await apiServer
            .delete("delete/watchList", {
              headers: {
                Authorization: `Bearer ${user?.token}`,
              },
              params: {
                watchlist_id: filter.id,
              },
            })
            .then((res) => {
              updateList(false);
              //ToastAndroid.show("Removed the watchList", ToastAndroid.SHORT);
            })
            .catch((e) => console.log(e));
        })
        .catch((e) => {});
      return;
    }

    await apiServer
      .post(
        "create/watchList",
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
        console.log(res.data);
        updateList(true);
        //ToastAndroid.show("Added the watchlist", ToastAndroid.SHORT);
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
          onClick={() => updateDotsVisible(true)}
          image={require("../../assets/Header/dots.png")}
        />
      </Header.Root>

      {dotsVisible && (
        <ModalOptionsBottom
          options={options}
          visible={dotsVisible}
          updateVisible={() => updateDotsVisible(!dotsVisible)}
        />
      )}

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
