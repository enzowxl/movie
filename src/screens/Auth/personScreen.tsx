import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Header } from "../../components/Auth/Header";
import { COLORS, CONFIG, api } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Splash from "../../components/Splash";
import Recommendations from "../../components/Auth/Recommendations";
import Participation from "../../components/Auth/Participations";
import Biography from "../../components/Auth/Biography";
import PersonalInfo from "../../components/Auth/PersonalInfo";
import PersonImage from "../../components/Auth/PersonImage";

export default function PersonScreen({ personId, route }: any) {
  const params = route.params;

  const { width } = useWindowDimensions();

  const [response, updateResponse] = useState<any>();
  const [participation, updateParticipation] = useState<any>();
  const [biographyPerson, updateBiographyPerson] = useState(false);
  const [loading, updateLoading] = useState(true);

  const n = useNavigation<any>();

  function seeMore() {
    updateBiographyPerson(!biographyPerson);
  }

  useEffect(() => {
    updateLoading(true);
    (async () => {
      await api
        .request({
          url: `person/${
            params?.personId ? params?.personId : personId
          }?language=en-US`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(function (res) {
          updateResponse(res.data);
        });

      await api
        .request({
          url: `person/${
            params?.personId ? params?.personId : personId
          }/movie_credits`,
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${CONFIG.API_KEY}`,
          },
        })
        .then(function (res) {
          updateParticipation(res.data.cast);
        });

      updateLoading(false);
    })();
  }, [personId]);

  if (loading) return <Splash />;

  return (
    <View style={styles.cont}>
      <Header.Root backGround={false}>
        <Header.Left
          onClick={() => {
            n.goBack();
          }}
          image={require("../../assets/Header/previous-green.png")}
        />

        <Header.Center text="PERSON DETAIL" />

        <Header.Right
          onClick={() => {}}
          image={require("../../assets/Header/heart-favorite.png")}
        />
      </Header.Root>

      <PersonImage response={response?.profile_path} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.cont2, { width }]}
      >
        <View style={styles.contText}>
          <Text style={[styles.txt, { width: 300 }]}>{response?.name}</Text>
        </View>

        {response?.biography?.length === 0 ? null : (
          <Biography
            biographyPerson={biographyPerson}
            response={response}
            seeMore={seeMore}
          />
        )}

        <PersonalInfo response={response} />

        <Participation data={participation} />
      </ScrollView>
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
  contSinopse: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
});
