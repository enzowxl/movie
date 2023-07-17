import { useState } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { COLORS } from "../../../constants";
import ModalPhoto from "../Modals/ModalPhoto";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

interface DrawerButtonProps {
  onPress: () => void;
  icon: any;
  label: string;
}

export default function CustomDrawer({ navigation }: any) {
  const n = useNavigation<any>();

  const [photoVisible, updatePhotoVisible] = useState(false);

  function DrawerButton({ onPress, icon, label }: DrawerButtonProps) {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          height: 50,
          marginBottom: 20,
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Image
          style={{ width: 30, height: 30, tintColor: COLORS.secondary }}
          source={icon}
        />

        <Text style={styles.txt}>{label}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <DrawerContentScrollView
      scrollEnabled
      contentContainerStyle={styles.container}
    >
      {photoVisible && (
        <ModalPhoto
          image={require("../../../assets/User/photo.png")}
          visible={photoVisible}
          updateVisible={() => updatePhotoVisible(!photoVisible)}
        />
      )}
      <View style={styles.cont}>
        <View style={styles.user}>
          <TouchableOpacity
            onPress={() => updatePhotoVisible(true)}
            style={{ borderRadius: 300 }}
          >
            <Image
              style={styles.img}
              source={require("../../../assets/User/photo.png")}
            />
          </TouchableOpacity>
          <Text style={styles.txt}>Name</Text>
        </View>
        <View style={styles.items}>
          <DrawerButton
            onPress={() => {
              n.navigate("StackGenres", {
                screen: "Genres",
              });
            }}
            label={"Genres"}
            icon={require("../../../assets/User/genre.png")}
          />
          <DrawerButton
            onPress={() => {
              n.navigate("StackWatchList", {
                screen: "WatchList",
              });
            }}
            label={"WatchList"}
            icon={require("../../../assets/User/file.png")}
          />
          <DrawerButton
            onPress={() => {
              n.navigate("StackFavorites", {
                screen: "Favorites",
              });
            }}
            label={"Favorites"}
            icon={require("../../../assets/tabBar/heart.png")}
          />
          <View style={{ position: "absolute", bottom: 0 }}>
            <DrawerButton
              onPress={() => {}}
              label={"Log Out"}
              icon={require("../../../assets/User/exit.png")}
            />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cont: {
    flex: 1,
  },
  img: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 300,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  txt: {
    fontSize: 14,
    fontFamily: "Jost_600SemiBold",
    color: COLORS.white,
    marginHorizontal: 10,
  },
  items: {
    flex: 1,
  },
});
