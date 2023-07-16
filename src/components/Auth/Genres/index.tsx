import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useContext } from 'react'
import { COLORS } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { MovieContext } from "../../../provider/movie";

export default function Genres({ data }: any) {

  const movieContext = useContext(MovieContext)

  const n = useNavigation<any>();

  const ItemList = (props: any) => {
    function navigateGenreScreen(dataButton: any) {
      const url = `discover/movie?include_adult=false&include_video=false&language=${movieContext.language}&page=${movieContext.page}&sort_by=popularity.desc&with_genres=${dataButton.id}`;
      n.navigate("ListMovies", {
        data: {
          title: dataButton.name,
          url: url,
        },
      });
    }

    return (
      <TouchableOpacity
        onPress={() => navigateGenreScreen(props.item)}
        style={[
          styles.cont,
          {
            marginLeft: data[0] === props.item ? 30 : 5,
            marginRight: props.index === data.length - 1 ? 30 : 0
          },
        ]}
      >
        <Text style={styles.txt}>{props.item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(data) => data.id.toString()}
      renderItem={(props) => <ItemList {...props} />}
    />
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: COLORS.white,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  txt: {
    fontFamily: "Jost_400Regular",
    fontSize: 17,
    color: COLORS.primary,
  },
});
