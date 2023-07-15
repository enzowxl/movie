import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../../../constants";

export default function Image({ response }: any) {
  const { width } = useWindowDimensions();

  return (
    <ImageBackground
      style={{ backgroundColor: COLORS.primary }}
      source={{
        uri: `https://image.tmdb.org/t/p/original${response}`,
      }}
    >
      <View style={[styles.img, { width }]} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  img: {
    height: "60%",
  },
  cont2: {
    position: "absolute",
    bottom: 0,
    height: "45%",
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  txt: {
    fontSize: 25,
    fontFamily: "Jost_600SemiBold",
    color: COLORS.white,
  },
  contText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  contSinopse: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
});
