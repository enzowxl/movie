import { StyleSheet, View, Text } from "react-native";
import { COLORS, apiServer } from "../../../constants";
import { Header } from "../../../components/Auth/Header";
import { useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../provider";
import Favorites from "../../../components/Auth/Favorites";

export default function FavoritesScreen({ route }: any) {
  const n = useNavigation<any>();

  const { user } = useContext(AuthContext);

  const [response, updateResponse] = useState([]);

  useEffect(() => {
    (async () => {
      await apiServer
        .get("details/favorites", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        })
        .then((res) => {
          updateResponse(res.data);
        })
        .catch((e) => console.log(e));
    })();
  }, [response]);

  return (
    <View style={styles.cont}>
      <Header.Root backGround>
        <Header.Left
          onClick={() => {
            n.goBack();
          }}
          image={require("../../../assets/Header/previous-green.png")}
        />
        <Header.Center text="FAVORITES" />
        <View style={{ width: 30 }} />
      </Header.Root>

      <View style={{ marginTop: 100, marginBottom: 60 }}>
        {response.length === 0 ? null : <Favorites data={response} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
