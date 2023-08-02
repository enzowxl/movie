import { StyleSheet, View, Text } from "react-native";
import { COLORS, apiServer } from "../../../constants";
import { Header } from "../../../components/Auth/Header";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../../provider";
import WatchList from "../../../components/Auth/WatchList";

export default function WatchListScreen({ route }: any) {
  const n = useNavigation<any>();

  const { user } = useContext(AuthContext);

  const [response, updateResponse] = useState([]);

  useEffect(() => {
    (async () => {
      await apiServer
        .get("details/watchList", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        })
        .then((res) => {
          updateResponse(res.data);
        })
        .catch((e) => {});
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
        <Header.Center text="WATCHLIST" />
        <View style={{ width: 30 }} />
      </Header.Root>

      <View style={{ marginTop: 100, marginBottom: 60 }}>
        {response.length === 0 ? null : <WatchList data={response} />}
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
