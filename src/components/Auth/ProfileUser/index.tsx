import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants";

export default function UserContent({ updateVisible }: any) {
  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={updateVisible} style={{ borderRadius: 300 }}>
        <Image
          style={styles.img}
          source={require("../../../assets/User/photo.png")}
        />
      </TouchableOpacity>

      <Text style={styles.txt}>Name</Text>
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
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 300,
  },
  txt: {
    fontSize: 14,
    fontFamily: "Jost_600SemiBold",
    color: COLORS.white,
    marginHorizontal: 10,
  },
});
