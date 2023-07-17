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

export default function ListSearch({ data }: any) {
  const n = useNavigation<any>();

  function ItemList(props: any) {
    function navigationMovie() {
      n.push("Movie", {
        movieId: props.item.id,
      });
    }

    return (
      <TouchableOpacity
        style={[styles.cont, { ...ITEMS.movieCard }]}
        onPress={navigationMovie}
      >
        {props.item.poster_path ? (
          <Image
            style={{ ...ITEMS.movieCard }}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${props.item.poster_path}`,
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
          <Text style={styles.txt}>{props.item.title}</Text>
          <Text
            style={[
              styles.txt,
              { fontFamily: "Jost_400Regular", fontSize: 14 },
            ]}
          >
            {props.item.overview.length <= 100
              ? props.item.overview
              : `${props.item.overview.slice(0, 100)}...`}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  //{ fontFamily: "Jost_400Regular", fontSize: 14 }
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
