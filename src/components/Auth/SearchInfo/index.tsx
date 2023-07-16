import { View, StyleSheet, Image } from "react-native";
import { COLORS } from "../../../constants";

export default function SearchInfo() {
  return (
    <View style={styles.cont}>
      <Image
        style={styles.img}
        source={require("../../../assets/Search/search-info.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
    tintColor:COLORS.secondary
  },
});
