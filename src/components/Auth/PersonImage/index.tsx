import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../../../constants";

export default function Images({ response }: any) {
  const { width } = useWindowDimensions();

  return response ? (
    <Image
      style={[styles.img, { width }]}
      source={{
        uri: `https://image.tmdb.org/t/p/original${response}`,
      }}
    />
  ) : (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={[
          styles.img,
          {
            tintColor: COLORS.gray,
            height: "60%",
            width: "60%",
            resizeMode: "contain",
          },
        ]}
        source={
          response
            ? {
                uri: `https://image.tmdb.org/t/p/original${response}`,
              }
            : require("../../../assets/tabBar/user-full.png")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    backgroundColor: COLORS.primary,
    height: "60%",
  },
});
