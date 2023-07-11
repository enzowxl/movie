import { createDrawerNavigator } from "@react-navigation/drawer"

import TabRoute from "./tab.routes"
import StackRoute from "./stack.routes"

export default function DrawerRoute() {

    const Drawer = createDrawerNavigator()

    return (

        <Drawer.Navigator
        screenOptions={{
            headerShown:false
        }}
        >

            <Drawer.Screen
            name="Tab"
            component={TabRoute}
            />

            <Drawer.Screen
            name="Stack"
            component={StackRoute}
            />

        </Drawer.Navigator>

    )
}