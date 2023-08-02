import {
  Modal,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../../../../constants";
import { useRef } from "react";
import * as Animatable from "react-native-animatable";

export default function ModalOptionsBottom({
  options,
  visible,
  updateVisible,
}: any) {
  const { width } = useWindowDimensions();

  const optionsRef = useRef(null);

  return (
    <Modal statusBarTranslucent visible={visible} transparent>
      <View
        style={styles.cont}
        onTouchEnd={() => {
          optionsRef.current?.fadeOutDownBig().then(() => {
            updateVisible();
          });
        }}
      >
        <Animatable.View
          animation={"fadeInUpBig"}
          ref={optionsRef}
          style={[styles.widget, { width }]}
        >
          {options.map((res: any, index: any) => {
            return (
              <View key={res.id}>
                <TouchableOpacity
                  onPress={res.onPress}
                  style={styles.optionContainer}
                >
                  <Image
                    style={{ width: 30, height: 30, tintColor: COLORS.primary }}
                    source={res.icon}
                  />

                  <Text style={styles.txt}>{res.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </Animatable.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.grayE,
  },
  widget: {
    backgroundColor: COLORS.secondary,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 20,
    position: "absolute",
    bottom: 0,
  },
  optionContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
  },
  txt: {
    fontSize: 18,
    color: COLORS.primary,
    fontFamily: "Jost_600SemiBold",
    marginLeft: 20,
  },
});
