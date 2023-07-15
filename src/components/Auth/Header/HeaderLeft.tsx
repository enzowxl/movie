import { TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../../constants";

interface HeaderLeftProps {
  image: any;
  onClick: () => void;
}

export default function HeaderLeft({ image, onClick }: HeaderLeftProps) {
  return (
    <TouchableOpacity onPress={onClick}>
      <Image
        style={{ width: 30, height: 30, tintColor: COLORS.secondary }}
        source={image}
      />
    </TouchableOpacity>
  );
}
