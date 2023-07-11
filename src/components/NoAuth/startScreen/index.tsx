import {
    View,
    StyleSheet,
    Image,
    Text,
    useWindowDimensions
} from 'react-native'

import { COLORS } from '../../../constants'

interface DataProps {
    data: {
        id: number;
        image: any;
        title: string;
        subtitle: string;
    }
}

export default function StartScreenList(props: DataProps) {

    const { width } = useWindowDimensions()

    return (

        <View style={[styles.cont, { width }]}>

            <Image
                style={styles.image}
                source={props.data.image}
            />

            <Text style={styles.title}>{props.data.title}</Text>

            <Text style={styles.subtitle}>{props.data.subtitle}</Text>

        </View>

    )

}

const styles = StyleSheet.create({

    cont: {
        alignItems: 'center',
    },

    image: {
        width: 250,
        height: 250,
        marginTop: 70,
        marginBottom: 40,
    },

    title: {
        fontSize: 40,
        color: COLORS.white,
        marginBottom: 10,
        fontFamily: 'Jost_600SemiBold'
    },

    subtitle: {
        fontSize: 16,
        color: COLORS.white,
        width: 250,
        textAlign: 'center',
        fontFamily: 'Jost_400Regular'
    }

})