import { useState } from "react";

import {
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  ScrollView,
} from "react-native";

import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
  Jost_700Bold,
} from "@expo-google-fonts/jost";

import { COLORS } from "../../../constants";

import { Header } from "../../../components/Auth/Header";
import Load from "../../../components/Load";
import HeaderCenter from "../../../components/Auth/Header/HeaderCenter";
import { useNavigation } from "@react-navigation/native";
import UserContent from "../../../components/Auth/ProfileUser";
import Favorite from "../../../components/Auth/ProfileFavorites";
import ModalOptions from "../../../components/Auth/Modals/ModalOptions";
import ModalOptionsBottom from "../../../components/Auth/Modals/ModalOptionsBottom";
import ModalPhoto from "../../../components/Auth/Modals/ModalPhoto";

export default function ProfileScreen() {
  const [dotsVisible, updateDotsVisible] = useState(false);
  const [photoVisible, updatePhotoVisible] = useState(false);

  const n = useNavigation<any>();

  const [fontLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_400Regular,
  });

  if (!fontLoaded) return <Load />;

  const options = [
    {
      id: 1,
      name: "Edit profile",
      onPress: () => n.navigate("StackProfile"),
      icon: require("../../../assets/Modal/user-full.png"),
    },
    {
      id: 2,
      name: "Change language",
      onPress: () => n.navigate("StackProfile"),
      icon: require("../../../assets/Modal/language.png"),
    },
  ];

  return (
    <View style={styles.cont}>
      {dotsVisible && (
        <ModalOptionsBottom
          options={options}
          visible={dotsVisible}
          updateVisible={() => updateDotsVisible(!dotsVisible)}
        />
      )}
      {photoVisible && (
        <ModalPhoto
          image={require("../../../assets/User/photo.png")}
          visible={photoVisible}
          updateVisible={() => updatePhotoVisible(!photoVisible)}
        />
      )}
      <Header.Root backGround>
        <Header.Left
          onClick={() => {
            n.openDrawer();
          }}
          image={require("../../../assets/Header/menu.png")}
        />

        <HeaderCenter text="PROFILE" />

        <Header.Right
          onClick={() => updateDotsVisible(true)}
          image={require("../../../assets/Header/dots.png")}
        />
      </Header.Root>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
        }}
      >
        <View style={{ marginTop: 100, marginBottom: 60 }}>
          <UserContent updateVisible={() => updatePhotoVisible(true)} />

          {/*<Favorite
            image={require("../../../assets/User/movie.png")}
            title={"Movie"}
            response={"none"}
          />

          <Favorite
            image={require("../../../assets/User/genre.png")}
            title={"Genre"}
            response={"none"}
          />

          <Favorite
            image={require("../../../assets/User/actor.png")}
            title={"Actor"}
            response={"none"}
      />*/}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
