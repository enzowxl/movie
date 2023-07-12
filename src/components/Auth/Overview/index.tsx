import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../constants'

export default function Overview({ response }: any ) {

    return(

        <View style={styles.contOverview}>

        <Text style={[styles.txt, { fontSize: 20, marginBottom: 10 }]}
        >Overview</Text>

        <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
        >{response?.overview}</Text>

    </View>

    )
    
}

const styles = StyleSheet.create({

    cont: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    img: {
        height: '60%',
    },
    cont2: {
        position: 'absolute',
        bottom: 0,
        height: '45%',
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,

    },
    txt: {
        fontSize: 25,
        fontFamily: 'Jost_600SemiBold',
        color: COLORS.white,

    },
    contText: {
        paddingHorizontal: 30,
        paddingTop: 30,
        marginBottom: 20
    },
    contOverview: {
        paddingHorizontal: 30,
        marginBottom: 20
    }

})