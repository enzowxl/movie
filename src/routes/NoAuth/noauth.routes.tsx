import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import StartScreen from "../../screens/NoAuth/startScreen";
import SignInScreen from "../../screens/NoAuth/signinScreen";
import SignUpScreen from "../../screens/NoAuth/signupScreen";

export default function NoAuthRoute() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        transitionSpec: {
          open: { animation: "timing", config: { duration: 500 } },
          close: { animation: "timing", config: { duration: 500 } },
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="Start"
    >
      <Stack.Screen name="Start" component={StartScreen} />

      <Stack.Screen name="SignIn" component={SignInScreen} />

      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
