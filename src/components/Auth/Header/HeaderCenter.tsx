import { Text } from "react-native";
import { COLORS } from "../../../constants";

interface HeaderCenterProps {
  text: string;
}

export default function HeaderCenter({ text }: HeaderCenterProps) {
  return (
    <Text
      style={{
        fontFamily: "Jost_600SemiBold",
        fontSize: 20,
        color: COLORS.secondary,
        textShadowColor: COLORS.primary,
        textShadowRadius: 15,
        textShadowOffset: {
          width: 2,
          height: 2,
        },
      }}
    >
      {text}
    </Text>
  );
}
