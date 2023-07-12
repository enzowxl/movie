import { createDrawerNavigator, useDrawerStatus } from "@react-navigation/drawer"
import { View, Animated, Dimensions } from "react-native"
import { COLORS } from "../../constants"
import TabRoute from "./tab.routes"
import StackRoute from "./stack.routes"
import CustomDrawer from "../../components/Auth/Drawer"
import { useRef } from "react"
import StackProfileRoute from "./stackProfile.routes"


export default function DrawerRoute() {

    const Drawer = createDrawerNavigator()

    const { height, width } = Dimensions.get('window');
    const scrolling = useRef(new Animated.Value(0)).current;

    const scaleInterpolate = scrolling.interpolate({
        inputRange: [0, width / 2],
        outputRange: [0.8, 1],
    })

    const radius = scrolling.interpolate({
        inputRange: [0, width / 2],
        outputRange: [50, 0],
    });

    const animatedStyle = {
        height: height,
        width: width,
        borderRadius: radius,
        transform: [{ scale: scaleInterpolate }],
        overflow: 'hidden',
    }

    return (

        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>

            <Drawer.Navigator
                initialRouteName="Tab"
                screenOptions={{
                    drawerType: 'slide',
                    overlayColor: 'transparent',
                    drawerStyle: {
                        flex: 1,
                        width: '65%',
                        padding: 20,
                        backgroundColor: 'transparent',

                    },
                    sceneContainerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerShown: false,
                }}
                drawerContent={(props) => {

                    const drawerStatus = useDrawerStatus()

                    const isDrawerOpen = drawerStatus === 'open'

                    if (isDrawerOpen) {
                        Animated.timing(scrolling, {
                            toValue: 0,
                            duration: 500,
                            useNativeDriver: false,
                        }).start();

                    } else {
                        Animated.timing(scrolling, {
                            toValue: width / 2,
                            duration: 500,
                            useNativeDriver: false,
                        }).start();
                    }

                    return (
                        <CustomDrawer
                            nav={props.navigation}
                        />
                    )

                }}
            >

                <Drawer.Screen
                    name="Tab"
                >
                    {
                        props =>
                            <TabRoute
                                animatedStyle={animatedStyle}
                                {...props}
                            />
                    }
                </Drawer.Screen>

                <Drawer.Screen
                    name="Stack"
                >
                    {
                        props =>
                            <StackRoute
                                animatedStyle={animatedStyle}
                                {...props}
                            />
                    }
                </Drawer.Screen>

                <Drawer.Screen
                    name="StackProfile"
                >
                    {
                        props =>
                            <StackProfileRoute
                                animatedStyle={animatedStyle}
                                {...props}
                            />
                    }
                </Drawer.Screen>

            </Drawer.Navigator>

        </View>

    )
}