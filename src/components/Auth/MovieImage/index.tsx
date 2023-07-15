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

  return (
    <Image
      style={[
        styles.img,
        { width },
        response ? null : { tintColor: COLORS.gray },
      ]}
      source={
        response
          ? {
              uri: `https://image.tmdb.org/t/p/original${response}`,
            }
          : require("../../../assets/tabBar/user-full.png")
      }
    />
  );
}

const styles = StyleSheet.create({
  img: {
    backgroundColor: COLORS.primary,
    height: "60%",
  },
});
