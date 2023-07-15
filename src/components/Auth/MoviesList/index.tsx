import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

export default function MoviesList({ data }: any) {
  const n = useNavigation<any>();
  const ItemList = (props: any) => {
    function navigationMovie() {
      n.push("Movie", {
        movieId: props.item.id,
      });
    }
    return (
      <TouchableOpacity
        onPress={navigationMovie}
        style={{
          marginBottom: props.index === data.length - 1 ? 100 : 30,
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${props.item.poster_path}`,
          }}
          style={styles.item}
        />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(data) => data.id.toString()}
      renderItem={(props) => <ItemList {...props} />}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    width: 130,
    height: 170,
    backgroundColor: COLORS.white02,
    marginHorizontal: 30,
  },
});
