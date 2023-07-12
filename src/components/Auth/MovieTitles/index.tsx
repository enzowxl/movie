import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../constants'

export default function MovieTitles({ response }: any) {

    return (

        <View style={styles.contText}>

            <Text style={[styles.txt, { width: 300, }]}
            >{response?.original_title}</Text>

            <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
            >
                {
                    response
                        ?
                        `${Math.floor(response?.runtime / 60)}h ${response?.runtime % 60}m`
                        :
                        null
                }
            </Text>

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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 30
    },
    contSinopse: {
        paddingHorizontal: 30,
        marginBottom: 20
    }

})