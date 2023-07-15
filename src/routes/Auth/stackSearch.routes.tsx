import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Animated } from "react-native";

import ListMoviesScreen from "../../screens/Auth/listMoviesScreen";
import MovieScreen from "../../screens/Auth/movieScreen";
import PersonScreen from "../../screens/Auth/personScreen";
import SearchScreen from "../../screens/Auth/searchScreen";

export default function StackSearchRoute({ animatedStyle, route }: any) {
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
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      >
        <Stack.Screen name="Search">
          {(props) => <SearchScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ListMovies">
          {(props) => <ListMoviesScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Movie">
          {(props) => <MovieScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Person">
          {(props) => <PersonScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
}
