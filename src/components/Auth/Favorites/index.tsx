import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS, ITEMS } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

export default function Favorites({ data }: any) {
  const n = useNavigation<any>();

  function ItemList(props: any) {
    function navigationMovie() {
      n.push("Movie", {
        movieId: props.item.movie_id,
      });
    }

    return (
      <TouchableOpacity
        style={[styles.cont, { ...ITEMS.movieCard }]}
        onPress={navigationMovie}
      >
        {props?.item.url_post ? (
          <Image
            style={{ ...ITEMS.movieCard }}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${props.item.url_post}`,
            }}
          />
        ) : (
          <View
            style={{
              ...ITEMS.movieCard,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                tintColor: COLORS.gray,
              }}
              source={require("../../../assets/User/no-photo.png")}
            />
          </View>
        )}
        <View>
          <Text style={styles.txt}>{props.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <FlatList
      data={data}
      keyExtractor={(data) => data.id.toString()}
      renderItem={(props) => <ItemList {...props} />}
    />
  );
}

const styles = StyleSheet.create({
  cont: {
    marginLeft: 30,
    marginBottom: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  txt: {
    fontSize: 20,
    fontFamily: "Jost_600SemiBold",
    color: COLORS.white,
    width: 250,
    paddingHorizontal: 20,
    marginVertical: 5,
    textAlign: "center",
  },
});
