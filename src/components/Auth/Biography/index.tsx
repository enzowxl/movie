import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export default function Biography({ biographyPerson, response, seeMore }: any) {
  return (
    <View style={styles.contBio}>
      <Text style={[styles.txt, { fontSize: 20, marginBottom: 10 }]}>
        Biography
      </Text>

      <Text
        style={[styles.txt, { fontFamily: "Jost_400Regular", fontSize: 14 }]}
      >
        {biographyPerson
          ? response?.biography
          : `${response?.biography?.slice(0, 250)}...`}
        <Text onPress={seeMore} style={{ color: COLORS.secondary }}>
          {response?.biography?.length <= 250
            ? null
            : biographyPerson
            ? " See less"
            : " See more"}
        </Text>
      </Text>
    </View>
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
    paddingHorizontal: 30,
    paddingTop: 30,
    marginBottom: 20,
  },
  contBio: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
});
