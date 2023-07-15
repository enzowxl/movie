import { View, Image, StyleSheet, Text } from "react-native";
import { COLORS } from "../../../constants";

interface FavoriteProps {
  title: string;
  response: string;
  image: any;
}

export default function Favorite({ title, image, response }: FavoriteProps) {
  return (
    <View style={styles.cont}>
      <Image style={styles.img} source={image} />

      <Text style={styles.txt}>
        {title} - {response}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
    marginBottom: 40,
  },
  img: {
    width: 30,
    height: 30,
    tintColor: COLORS.secondary,
  },
  txt: {
    fontSize: 14,
    fontFamily: "Jost_600SemiBold",
    color: COLORS.white,
    marginHorizontal: 10,
  },
});
