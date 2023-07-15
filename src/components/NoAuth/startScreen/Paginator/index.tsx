import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../../../../constants";

export default function StartScreenPaginator(props: any) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.cont}>
      {props.data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, i * 1 * width];

        const widthDot = props.scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacityDot = props.scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: widthDot,
                opacity: opacityDot,
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.secondary,
    marginHorizontal: 8,
  },
});
