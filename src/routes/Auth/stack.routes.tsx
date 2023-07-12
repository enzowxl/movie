import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
import MovieScreen from "../../screens/Auth/movieScreen"
import { Animated } from "react-native"
import PersonScreen from "../../screens/Auth/personScreen"
import ListMoviesScreen from "../../screens/Auth/listMoviesScreen"

export default function StackRoute({ animatedStyle }: any ) {

    const Stack = createStackNavigator()

    return (

        <Animated.View style={{...animatedStyle}}>

            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animationEnabled: true,
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 500 } },
                        close: { animation: 'timing', config: { duration: 500 } },
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            >

                <Stack.Screen
                    name="Movie"
                >
                    {(props) => <MovieScreen {...props} />}
                </Stack.Screen>

                <Stack.Screen
                    name="Person"
                >
                    {(props) => <PersonScreen {...props}/>}
                </Stack.Screen>

                <Stack.Screen
                    name="ListMovies"
                >
                    {(props) => <ListMoviesScreen {...props}/>}
                </Stack.Screen>

            </Stack.Navigator>

        </Animated.View>

    )
}