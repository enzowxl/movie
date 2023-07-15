import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
  Jost_700Bold,
} from "@expo-google-fonts/jost";
import { View, Animated, Dimensions } from "react-native";
import { COLORS } from "../../constants";
import { useRef } from "react";

import TabRoute from "./tab.routes";
import StackRoute from "./stack.routes";
import CustomDrawer from "../../components/Auth/Drawer";
import StackProfileRoute from "./stackProfile.routes";
import Splash from "../../components/Splash";
import StackListRoute from "./stackList.routes";
import StackSearchRoute from "./stackSearch.routes";

export default function DrawerRoute() {
  const [fontLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_400Regular,
  });

  const Drawer = createDrawerNavigator();

  const { height, width } = Dimensions.get("window");
  const scrolling = useRef(new Animated.Value(0)).current;

  const scaleInterpolate = scrolling.interpolate({
    inputRange: [0, width / 2],
    outputRange: [0.8, 1],
  });

  const radius = scrolling.interpolate({
    inputRange: [0, width / 2],
    outputRange: [50, 0],
  });

  const animatedStyle = {
    height: height,
    width: width,
    borderRadius: radius,
    transform: [{ scale: scaleInterpolate }],
    overflow: "hidden",
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Drawer.Navigator
        initialRouteName="Tab"
        screenOptions={{
          drawerType: "slide",
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingTop: 30,
            padding: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: false,
        }}
        drawerContent={(props) => {
          const drawerStatus = useDrawerStatus();

          const isDrawerOpen = drawerStatus === "open";

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

          if (!fontLoaded) return <Splash />;

          return <CustomDrawer navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="Tab">
          {(props) => <TabRoute animatedStyle={animatedStyle} {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name="Stack">
          {(props) => <StackRoute animatedStyle={animatedStyle} {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name="StackList">
          {(props) => (
            <StackListRoute animatedStyle={animatedStyle} {...props} />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="StackSearch">
          {(props) => (
            <StackSearchRoute animatedStyle={animatedStyle} {...props} />
          )}
        </Drawer.Screen>

        <Drawer.Screen name="StackProfile">
          {(props) => (
            <StackProfileRoute animatedStyle={animatedStyle} {...props} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
}
