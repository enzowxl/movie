import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Animated } from "react-native";

import ListMoviesScreen from "../../screens/Auth/listMoviesScreen";

export default function StackListRoute({ animatedStyle, route }: any) {
  const params = route.params;

  const Stack = createStackNavigator();

  return (
    <Animated.View style={{ ...animatedStyle }}>
      <Stack.Navigator
        initialRouteName={params?.screen}
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          transitionSpec: {
            open: { animation: "timing", config: { duration: 500 } },
            close: { animation: "timing", config: { duration: 500 } },
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="ListMovies">
          {(props) => <ListMoviesScreen data={params?.data} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
}
