import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "@rneui/themed";
import { COLORS } from "../../../../constants";
import { InputSignUpProps } from "../../../../types/types";
import { useState } from 'react'

export default function SignUpInputs(props: InputSignUpProps) {

  const [viewPass, updateViewPass] = useState(true)

  function viewPassword() {

    updateViewPass(!viewPass)

  }

  return (
    <>
      <Input
        leftIcon={
          <Image
            style={styles.imageLeft}
            source={require("../../../../assets/signupScreen/username.png")}
          />
        }
        placeholder="Username"
        value={props.username}
        onChangeText={(t) => props.updateUsername(t)}
        placeholderTextColor={COLORS.gray}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        containerStyle={[styles.cont, {marginTop:30}]}
      />

      <Input
        leftIcon={
          <Image
            style={styles.imageLeft}
            source={require("../../../../assets/signupScreen/email.png")}
          />
        }
        placeholder="Email"
        value={props.email}
        onChangeText={(t) => props.updateEmail(t)}
        placeholderTextColor={COLORS.gray}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        containerStyle={styles.cont}
      />

      <Input
        secureTextEntry={viewPass}
        rightIcon={
          <TouchableOpacity
            onPress={viewPassword}
            style={{ position: "absolute", right: 10 }}
          >
            <Image
              style={{ width: 20, height: 20, tintColor: COLORS.gray }}
              source={
                viewPass
                  ?
                  require("../../../../assets/signupScreen/view.png")
                  :
                  require("../../../../assets/signupScreen/not-view.png")
              }
            />
          </TouchableOpacity>
        }
        leftIcon={
          <Image
            style={styles.imageLeft}
            source={require("../../../../assets/signupScreen/lock.png")}
          />
        }
        placeholder="Password"
        value={props.password}
        onChangeText={(t) => props.updatePassword(t)}
        placeholderTextColor={COLORS.gray}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        containerStyle={styles.cont}
      />

      <Input
        secureTextEntry={viewPass}
        rightIcon={
          <TouchableOpacity
            onPress={viewPassword}
            style={{
              position: "absolute",
              right: 10,
            }}
          >
            <Image
              style={{ width: 20, height: 20, tintColor: COLORS.gray }}
              source={
                viewPass
                  ?
                  require("../../../../assets/signupScreen/view.png")
                  :
                  require("../../../../assets/signupScreen/not-view.png")
              }
            />
          </TouchableOpacity>
        }
        leftIcon={
          <Image
            style={styles.imageLeft}
            source={require("../../../../assets/signupScreen/lock.png")}
          />
        }
        placeholder="Confirm Password"
        value={props.confirmPassword}
        onChangeText={(t) => props.updateConfirmPassword(t)}
        placeholderTextColor={COLORS.gray}
        inputContainerStyle={styles.inputCont}
        inputStyle={styles.inputStyle}
        containerStyle={styles.cont}
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 0,
    fontFamily: "Jost_700Bold",
    textAlign: "center",
    color: COLORS.white,
    fontSize: 16,
    paddingHorizontal: 40,
  },
  inputCont: {
    borderBottomWidth: 1,
    borderColor: COLORS.secondary,
  },
  cont: {
    width: 300,
    height: 50,
    marginBottom: 30,
  },
  imageLeft: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 10,
    tintColor: COLORS.gray,
  },
});
