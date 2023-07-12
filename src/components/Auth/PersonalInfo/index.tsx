import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../constants'

export default function PersonalInfo({ response }: any ) {

    return(


        <View style={styles.contSinopse}>

        <Text style={[styles.txt, { fontSize: 20, marginBottom: 10 }]}
        >Personal information</Text>

        <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
        >Occupation - {response?.known_for_department}</Text>

        <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
        >Genre - {
                response?.gender === 0
                    ?
                    'Not specified'
                    :
                    response?.gender === 1
                        ?
                        'Female'
                        :
                        response?.gender === 2
                            ?
                            'Male'
                            :
                            response?.gender === 3
                                ?
                                'Non-binary'
                                :
                                null
            }</Text>

        <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
        >Birth - {response?.birthday}</Text>

        <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
        >Age - {new Date().getFullYear() - new Date(response?.birthday).getFullYear()}</Text>

        <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
        >Birthplace - {response?.place_of_birth}</Text>

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
    contSinopse: {
        paddingHorizontal: 30,
        marginBottom: 20
    }

})