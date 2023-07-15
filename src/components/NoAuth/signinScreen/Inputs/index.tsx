import { Image, TouchableOpacity } from "react-native";
import { Input } from "@rneui/themed";
import { COLORS } from "../../../../constants";

interface InputProps {
  email: string;
  password: string;
  updateEmail: any;
  updatePassword: any;
}

export default function SignInInputs(props: InputProps) {
  function viewPassword() {}

  return (
    <>
      <Input
        leftIcon={
          <Image
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              left: 10,
            }}
            source={require("../../../../assets/signinScreen/email.png")}
          />
        }
        placeholder="Email"
        value={props.email}
        onChangeText={(t) => props.updateEmail(t)}
        placeholderTextColor={COLORS.gray}
        inputContainerStyle={{
          borderBottomWidth: 1,
          borderColor: COLORS.secondary,
        }}
        inputStyle={{
          borderBottomWidth: 0,
          fontFamily: "Jost_700Bold",
          textAlign: "center",
          color: COLORS.white,
          fontSize: 16,
          paddingHorizontal: 40,
        }}
        containerStyle={{
          width: 300,
          height: 50,
          marginBottom: 30,
        }}
      />

      <Input
        rightIcon={
          <TouchableOpacity
            onPress={viewPassword}
            style={{
              position: "absolute",
              right: 10,
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require("../../../../assets/signinScreen/not-view.png")}
            />
          </TouchableOpacity>
        }
        leftIcon={
          <Image
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              left: 10,
            }}
            source={require("../../../../assets/signinScreen/lock.png")}
          />
        }
        placeholder="Password"
        value={props.password}
        onChangeText={(t) => props.updatePassword(t)}
        placeholderTextColor={COLORS.gray}
        inputContainerStyle={{
          borderBottomWidth: 1,
          borderColor: COLORS.secondary,
        }}
        inputStyle={{
          borderBottomWidth: 0,
          fontFamily: "Jost_700Bold",
          textAlign: "center",
          color: COLORS.white,
          fontSize: 16,
          paddingHorizontal: 40,
        }}
        containerStyle={{
          width: 300,
          height: 50,
          marginBottom: 10,
        }}
      />
    </>
  );
}
