import { TouchableOpacity, Image } from "react-native";

interface HeaderLeftProps {
    image: any;
    onClick: () => void
}

export default function HeaderLeft({ image, onClick }: HeaderLeftProps ) {

    return(

        <TouchableOpacity
        onPress={onClick}
        >
            <Image
            style={{width: 30,height: 30,  }}
            source={image}
            />
        </TouchableOpacity>

    )
    
}