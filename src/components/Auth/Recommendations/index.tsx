import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

export default function Recommendations({ data }: any) {
  const n = useNavigation<any>();

  const ItemList = (props: any) => {
    function navigationRecommendations() {
      n.push("Movie", {
        movieId: props.item.id,
      });
    }

    return (
      <TouchableOpacity
        onPress={navigationRecommendations}
        style={[
          styles.cont,
          {
            marginLeft: data[0] === props.item ? 30 : 0,
            marginRight: props.index === data.length - 1 ? 30 : 10,
          },
        ]}
      >
        {props.item.backdrop_path === null &&
        props.item.poster_path === null ? (
          <Image
            style={[styles.img, {
              tintColor: COLORS.gray,
              width:100,
              height: 100,
             }]}
            source={require("../../../assets/User/no-photo.png")}
          />
        ) : (
          <Image
            style={styles.img}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${
                props.item.backdrop_path === null
                  ? props.item.poster_path
                  : props.item.backdrop_path
              }`,
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        marginBottom: 30,
      }}
    >
      <Text style={styles.txt}>Recommendations</Text>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(data) => data.id.toString()}
        renderItem={(props) => <ItemList {...props} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    borderRadius: 10,
    width: 230,
    height: 130,
    backgroundColor: COLORS.white02,
    justifyContent:'center',
    alignItems:'center'
  },
  txt: {
    fontSize: 20,
    fontFamily: "Jost_600SemiBold",
    color: COLORS.white,
    marginBottom: 10,
    paddingLeft: 30,
  },
  txt2: {
    fontSize: 14,
    fontFamily: "Jost_400Regular",
    color: COLORS.white,
  },
  img: {
    width: 230,
    height: 130,
    borderRadius: 10,
  },
  cont1: {
    alignItems: "center",
  },
});
