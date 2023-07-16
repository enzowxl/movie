import React from "react";
import { Text, View, useWindowDimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../../constants";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

export default function CustomTab(props: any) {
  const a = props.descriptors.tabBarIcon;

  const { width } = useWindowDimensions();
  const height = 100;
  const widthL = width + 1
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg width={widthL} height={height} viewBox={`0 0 ${widthL} ${height}`}>
        <Path
          d={`M0 0v${height}h${widthL}V0c0 22.091-17.909 40-40 40H40C17.909 40 0 22.091 0 0z`}
          fill={COLORS.secondary}
        />
      </Svg>
      <BottomTabBar {...props} />
    </View>
  );
}
