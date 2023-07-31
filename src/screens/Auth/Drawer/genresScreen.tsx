import { StyleSheet, View } from "react-native";
import { COLORS, CONFIG, api } from "../../../constants";
import { Header } from "../../../components/Auth/Header";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useContext } from "react";
import ListGenres from "../../../components/Auth/ListGenres";
import Splash from "../../../components/Splash";
import { MovieContext } from "../../../provider/movie";

export default function GenresScreen({ route }: any) {
  const [genres, updateGenres] = useState<any[]>([]);
  const [loading, updateLoading] = useState(true);

  const n = useNavigation<any>();

  const movieContext = useContext(MovieContext);

  useEffect(() => {
    updateLoading(true);
    (async () => {
      await api
        .request({
          url: `genre/movie/list`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(async function (res) {
          const updatedGenres = await Promise.all(
            res.data.genres.map(async (genre: any) => {
              const moviesResponse = await api.request({
                url: `discover/movie?include_adult=false&include_video=false&language=${movieContext.language}&page=${movieContext.page}&sort_by=popularity.desc&with_genres=${genre.id}`,
                method: "GET",
                headers: {
                  accept: "application/json",
                  Authorization: `Bearer ${CONFIG.API_KEY}`,
                },
              });
              const resultLength = moviesResponse.data.results.length;
              const randomIndex = Math.floor(Math.random() * resultLength);
              const movie = moviesResponse.data.results[randomIndex];
              return {
                ...genre,
                poster_path: movie ? movie.poster_path : null,
              };
            })
          );
          updateGenres(updatedGenres);
        })
        .catch((e) => console.log(e));

      updateLoading(false);
    })();
  }, []);

  if (loading) return <Splash />;

  return (
    <View style={styles.cont}>
      <Header.Root backGround>
        <Header.Left
          onClick={() => {
            n.goBack();
          }}
          image={require("../../../assets/Header/previous-green.png")}
        />
        <Header.Center text="GENRES" />
        <View style={{ width: 30 }} />
      </Header.Root>
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <ListGenres data={genres} />
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
