import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { COLORS, ITEMS } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { MovieContext } from "../../../provider/movie";
import { useContext } from "react";

export default function ListGenres({ data }: any) {
  const n = useNavigation<any>();
  const movieContext = useContext(MovieContext);

  const ItemList = (props: any) => {
    function navigateGenreScreen(dataButton: any) {
      const url = `discover/movie?include_adult=false&include_video=false&language=${movieContext.language}&page=${movieContext.page}&sort_by=popularity.desc&with_genres=${dataButton.id}`;
      n.navigate("ListMovies", {
        data: {
          title: dataButton.name,
          url: url,
          page: true,
        },
      });
    }
    return (
      <TouchableOpacity
        style={[
          styles.cont,
          {
            ...ITEMS.genreCard,
          },
        ]}
        onPress={() => navigateGenreScreen(props.item)}
      >
        <Text style={styles.txt}>{props.item.name.toUpperCase()}</Text>
        <Image
          style={{ ...ITEMS.genreCard, position: "absolute", opacity: 0.4 }}
          source={{
            uri: `https://www.themoviedb.org/t/p/original/${props.item.poster_path}`,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(data) => data.id}
      renderItem={(props) => <ItemList {...props} />}
    />
  );
}

const styles = StyleSheet.create({
  cont: {
    marginHorizontal: 15,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  txt: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 20,
    color: COLORS.white,
    zIndex: 2,
  },
});
