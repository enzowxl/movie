import { createStackNavigator } from "@react-navigation/stack"
import MovieScreen from "../../components/Auth/Movie"

export default function StackRoute({ route }: any) {

    const Stack = createStackNavigator()

    const { data } = route.params

    const Home2 = () => {
        return <></>
    }

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen
                name="Movie"
            >
                {(props) => <MovieScreen data={data} {...props}/>}
            </Stack.Screen>

            <Stack.Screen
                name="Person"
                component={Home2}
            />

        </Stack.Navigator>

    )
}