import { Image } from "react-native";
import { COLORS } from "../../../../constants";

export default function TabBarIcon(props: any) {
  let icon;

  if (props.route.name === "Home") {
    icon = props.focused
      ? require("../../../../assets/tabBar/home-full.png")
      : require("../../../../assets/tabBar/home.png");

    return (
      <Image
        style={{ width: 30, height: 30, tintColor: COLORS.primary }}
        source={icon}
      />
    );
  } else if (props.route.name === "Profile") {
    icon = props.focused
      ? require("../../../../assets/tabBar/user-full.png")
      : require("../../../../assets/tabBar/user.png");

    return (
      <Image
        style={{ width: 30, height: 30, tintColor: COLORS.primary }}
        source={icon}
      />
    );
  }

  return null;
}
