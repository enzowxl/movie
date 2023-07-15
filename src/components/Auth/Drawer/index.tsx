import { useState } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { COLORS } from "../../../constants";
import ModalPhoto from "../Modals/ModalPhoto";

export default function CustomDrawer({ navigation }: any) {
  const [photoVisible, updatePhotoVisible] = useState(false);

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
  },
  txt: {
    fontSize: 14,
    fontFamily: "Jost_600SemiBold",
    color: COLORS.white,
    marginHorizontal: 10,
  },
});
