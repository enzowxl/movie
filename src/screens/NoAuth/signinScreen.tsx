import { useState } from "react";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
  Jost_700Bold,
} from "@expo-google-fonts/jost";
import { useNavigation } from "@react-navigation/native";

import Load from "../../components/Load";
import SignInInputs from "../../components/NoAuth/signinScreen/Inputs";
import SignInButton from "../../components/NoAuth/signinScreen/Button";
import { COLORS } from "../../constants";

export default function SignInScreen() {
  const n = useNavigation<any>();

  const { width } = useWindowDimensions();
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [fontLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_700Bold,
  });

  function navigateSignUp() {
    n.navigate("SignUp");
    updateEmail("");
    updatePassword("");
  }

  if (!fontLoaded) return <Load />;

  return (
    <View style={styles.cont}>
      <Text style={styles.title}>Sign In</Text>
      <View style={[styles.cont2, { width }]}>
        <SignInInputs
          email={email}
          password={password}
          updateEmail={updateEmail}
          updatePassword={updatePassword}
        />

        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            marginRight: 70,
          }}
        >
          <Text style={styles.subtitle}>Forgot password?</Text>
        </TouchableOpacity>

        <SignInButton email={email} password={password} />

        <TouchableOpacity onPress={navigateSignUp}>
          <Text style={styles.subtitle2}>
            Don't have an account?{" "}
            <Text style={{ color: COLORS.secondary }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
  },

  cont2: {
    height: "85%",
    backgroundColor: COLORS.primary,
    position: "absolute",
    bottom: 0,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    alignItems: "center",
  },

  title: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 25,
    color: COLORS.primary,
    marginTop: 50,
    fontWeight: "900",
  },
  subtitle: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 14,
    color: COLORS.secondary,
    marginBottom: 30,
  },
  subtitle2: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 14,
    color: COLORS.white,
  },
});
