import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, ITEMS } from "../../../constants";
import { CONFIG, api } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

interface ListProps {
  url: string;
  title: string;
  page: boolean;
}

export default function List({ url, title, page }: ListProps) {
  const n = useNavigation<any>();

  const [response, updateResponse] = useState<any>();
  const [loading, updateLoading] = useState(true);

  useEffect(() => {
    updateLoading(true);
    (async () => {
      await api
        .request({
          url: url,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(function (res) {
          updateResponse(res.data.results);
          updateLoading(false);
        });
    })();
  }, []);

  function navigateMoviesList() {
    n.navigate("StackList", {
      data: {
        title: title,
        url: url,
        page: page,
      },
    });
  }

  const Item = (props: any) => {
    const navigateMovie = () => {
      n.navigate("Stack", {
        movieId: props.item.id,
      });
    };

    return (
      <TouchableOpacity onPress={navigateMovie}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${props.item.poster_path}`,
          }}
          style={{
            marginLeft: response[0].id === props.item.id ? 30 : 0,
            marginRight: props.index === response.length - 1 ? 30 : 10,
            ...ITEMS.movieCard,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.cont}>
      <View style={styles.contText}>
        <Text style={styles.txt}>{title}</Text>

        <TouchableOpacity onPress={navigateMoviesList}>
          <Text
            style={[
              styles.txt,
              {
                fontSize: 15,
                color: COLORS.gray,
              },
            ]}
          >
            Se all
          </Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size={50} color={COLORS.secondary} />
      ) : (
        <FlatList
          data={response}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(props) => <Item {...props} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: "Jost_600SemiBold",
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  cont: {
    marginBottom: 30,
  },
  contText: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
