import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../constants";
import { Header } from "../../../components/Auth/Header";
import { useNavigation } from "@react-navigation/native";

export default function GenresScreen({ route }: any) {
  const n = useNavigation<any>();

  return (
    <View style={styles.cont}>
      <Header.Root backGround>
        <Header.Left
          onClick={() => {
            n.goBack();
          }}
          image={require("../../../assets/Header/previous-green.png")}
        />
        <Header.Center text="GENRES" />
        <View style={{ width: 30 }} />
      </Header.Root>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
