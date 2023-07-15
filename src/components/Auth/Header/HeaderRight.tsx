import { TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../../constants";

interface HeaderRightProps {
  image: any;
  onClick: () => void;
}

export default function HeaderRight({ image, onClick }: HeaderRightProps) {
  return (
    <TouchableOpacity onPress={onClick}>
      <Image
        style={{ width: 30, height: 30, tintColor: COLORS.secondary }}
        source={image}
      />
    </TouchableOpacity>
  );
}
