import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Animated } from "react-native";

import EditProfileScreen from "../../screens/Auth/Profile/editProfileScreen";
import ChangeLanguageScreen from "../../screens/Auth/Profile/changeLanguageScreen";

export default function StackProfileRoute({ animatedStyle }: any) {
  const Stack = createStackNavigator();

  return (
    <Animated.View style={{ ...animatedStyle }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          transitionSpec: {
            open: { animation: "timing", config: { duration: 500 } },
            close: { animation: "timing", config: { duration: 500 } },
          },
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      >
        <Stack.Screen name="EditProfile">
          {(props) => <EditProfileScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="ChangeLanguage">
          {(props) => <ChangeLanguageScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
}
