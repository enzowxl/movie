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

import Movie from "../../components/NoAuth/signinScreen/Movie";
import Splash from "../../components/Splash";
import SignUpInputs from "../../components/NoAuth/signupScreen/Inputs";
import SignUpButton from "../../components/NoAuth/signupScreen/Button";
import { COLORS } from "../../constants";

export default function SignUpScreen() {
  const n = useNavigation<any>();

  const { width } = useWindowDimensions();
  const [username, updateUsername] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [confirmPassword, updateConfirmPassword] = useState("");
  const [fontLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_700Bold,
  });

  function navigateSignIn() {
    n.navigate("SignIn");
    updateEmail("");
    updateUsername("");
    updatePassword("");
    updateConfirmPassword("");
  }

  if (!fontLoaded) return <Splash />;

  return (
    <View style={styles.cont}>
      <Movie />

      <View style={[styles.cont2, { width }]}>
        <Text style={styles.title}>Sign Up</Text>

        <SignUpInputs
          username={username}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          updateUsername={updateUsername}
          updateEmail={updateEmail}
          updatePassword={updatePassword}
          updateConfirmPassword={updateConfirmPassword}
        />

        <SignUpButton
          username={username}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
        />

        <TouchableOpacity onPress={navigateSignIn}>
          <Text style={styles.subtitle2}>
            Have account?{" "}
            <Text style={{ color: COLORS.secondary }}>Sign In</Text>
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
    height: "80%",
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
    color: COLORS.secondary,
    marginTop: 20,
    textShadowColor: COLORS.secondary,
    textShadowRadius: 5,
    marginBottom: 30,
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
