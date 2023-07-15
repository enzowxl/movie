import {
  Modal,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../../../constants";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface ModalPhoto {
  visible: boolean;
  updateVisible: () => void;
}

export default function ModalOptions({ visible, updateVisible }: ModalPhoto) {
  const n = useNavigation<any>();

  function navigationStack(route: string) {
    n.navigate(route);
  }

  const options = [
    {
      id: 1,
      name: "Edit profile",
      onPress: () => navigationStack("StackProfile"),
      icon: require("../../../../assets/Modal/user-full.png"),
    },
    {
      id: 2,
      name: "Change language",
      onPress: () => navigationStack("StackProfile"),
      icon: require("../../../../assets/Modal/language.png"),
    },
  ];

  return (
    <Modal statusBarTranslucent visible={visible} transparent>
      <View style={styles.cont} onTouchEnd={updateVisible}>
        <View style={styles.widget}>
          {options.map((res, index) => {
            return (
              <View key={res.id}>
                <TouchableOpacity
                  onPress={res.onPress}
                  style={styles.optionContainer}
                >
                  <Image
                    style={{ width: 20, height: 20, tintColor: COLORS.primary }}
                    source={res.icon}
                  />

                  <Text style={styles.txt}>{res.name}</Text>
                </TouchableOpacity>

                <View
                  style={{
                    borderBottomWidth: index === options.length - 1 ? 0 : 1,
                  }}
                />
              </View>
            );
          })}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: "flex-end",
  },
  widget: {
    width: 170,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    marginTop: 80,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  optionContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  txt: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: "Jost_600SemiBold",
    marginLeft: 5,
  },
});
