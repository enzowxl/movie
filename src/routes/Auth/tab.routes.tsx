import { Image } from 'react-native'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "../../screens/Auth/homeScreen"
import ProfileScreen from '../../screens/Auth/profileScreen'

import { COLORS } from "../../constants"

export default function TabRoute() {

    const Tab = createBottomTabNavigator()

    return (

        <Tab.Navigator
        screenOptions={({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: COLORS.secondary,
              elevation: 0, 
              borderTopWidth: 0,
              height:60
            },
            tabBarShowLabel: false,
        })}
        >

            <Tab.Screen
            options={{
                tabBarIcon: ({ focused, size, color }) => {

                    if(focused) return <Image
                                style={{width:30, height:30}}
                                source={require('../../assets/tabBar/home-full.png')}
                                />

                    return <Image
                    style={{width:30, height:30}}
                    source={require('../../assets/tabBar/home.png')}
                    />

                }
            }}
            name="Home"
            component={HomeScreen}
            />

            <Tab.Screen
            options={{
                tabBarIcon: ({ focused, size, color }) => {

                    if(focused) return <Image
                                style={{width:30, height:30}}
                                source={require('../../assets/tabBar/user-full.png')}
                                />

                    return <Image
                    style={{width:30, height:30}}
                    source={require('../../assets/tabBar/user.png')}
                    />

                }
            }}
            name="Profile"
            component={ProfileScreen}
            />

        </Tab.Navigator>

    )
}