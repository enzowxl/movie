import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Animated } from "react-native";

import ListMoviesScreen from "../../screens/Auth/listMoviesScreen";
import MovieScreen from "../../screens/Auth/movieScreen";
import PersonScreen from "../../screens/Auth/personScreen";

export default function StackListRoute({ animatedStyle, route }: any) {
  const params = route.params;

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
        <Stack.Screen name="ListMovies">
          {(props) => <ListMoviesScreen data={params?.data} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Movie">
          {(props) => <MovieScreen movieId={params?.movieId} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Person">
          {(props) => <PersonScreen personId={params?.personId} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
}
