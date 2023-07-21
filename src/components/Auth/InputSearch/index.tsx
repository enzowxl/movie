import { Input } from "@rneui/themed";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

export default function InputSearch({ update, value }: any) {
  return (
    <View style={styles.inputview}>
      <Input
        leftIcon={
          <Image
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              left: 10,
            }}
            source={require("../../../assets/Header/search.png")}
          />
        }
        placeholder="Search movie..."
        value={value}
        cursorColor={COLORS.secondary}
        onChangeText={(t) => update(t)}
        placeholderTextColor={COLORS.gray}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        containerStyle={styles.contStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputview: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  inputStyle: {
    borderBottomWidth: 0,
    fontFamily: "Jost_700Bold",
    textAlign: "left",
    color: COLORS.white,
    fontSize: 16,
    paddingLeft: 40,
  },
  inputCont: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 300,
    padding: 2,
    marginTop:30
  },
  contStyle: {
    width: 330,
  },
});
