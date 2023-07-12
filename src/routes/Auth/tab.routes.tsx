import { Animated, Image, StyleSheet, View } from 'react-native'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "../../screens/Auth/homeScreen"
import ProfileScreen from '../../screens/Auth/profileScreen'
import CustomTab from '../../components/Auth/Tab'
import CustomTabButton from '../../components/Auth/Tab/TabButton'

import { COLORS } from "../../constants"
import TabBarIcon from '../../components/Auth/Tab/TabIcon'

export default function TabRoute({ animatedStyle }: any ) {

    const Tab = createBottomTabNavigator()

    return (

        <Animated.View style={{...animatedStyle}}>

            <Tab.Navigator
            tabBar={(props) => (<CustomTab {...props}/>)}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: styles.tab,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (<TabBarIcon route={route} focused={focused} />)
            })}
            >

                <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarButton: (props) => (<CustomTabButton {...props} />)
                }}
                />

                <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarButton: (props) => (<CustomTabButton {...props} />)
                }}
                />

            </Tab.Navigator>

        </Animated.View>

    )
}

const styles = StyleSheet.create({
    tab:{
        position:'absolute',
        bottom:5,
        backgroundColor: COLORS.trans,
        elevation: 0, 
        borderTopWidth: 0,
    }
})