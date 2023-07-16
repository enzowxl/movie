import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import { useContext } from "react";
import { COLORS } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { MovieContext } from "../../../provider/movie";

export default function Providers({ data }: any) {
  const movieContext = useContext(MovieContext);

  const n = useNavigation<any>();

  const ItemList = (props: any) => {
    function nameProvider(provider: any) {
      ToastAndroid.show(provider.provider_name, ToastAndroid.SHORT);
    }
    return (
      <TouchableOpacity
        onPress={() => nameProvider(props.item)}
        style={[
          styles.cont,
          {
            marginLeft: data[0] === props.item ? 30 : 10,
            ...styles.scale,
          },
        ]}
      >
        <Image
          style={{ borderRadius: 5, ...styles.scale }}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${props.item.logo_path}`,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.txt}>Providers</Text>

      <FlatList
        data={data}
        horizontal
        keyExtractor={(data) => data.provider_id.toString()}
        renderItem={(props) => <ItemList {...props} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: COLORS.white02,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    fontFamily: "Jost_600SemiBold",
    color: COLORS.white,
    marginBottom: 10,
    paddingLeft: 30,
  },
  scale: {
    height: 50,
    width: 50,
  },
});
