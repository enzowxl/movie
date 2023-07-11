import { View, StyleSheet, useWindowDimensions } from 'react-native'

import { COLORS } from '../../constants'

export default function ProfileScreen() {

    const { width } = useWindowDimensions()

    return(

        <View style={styles.cont}>

            <View style={[styles.cont2, { width }]}>


            </View>

        </View>

    )
    
}

const styles= StyleSheet.create({

    cont: {
        flex:1,
        backgroundColor: COLORS.secondary
    },
    cont2:{
        height:'100%',
        backgroundColor:COLORS.primary,
        borderBottomStartRadius:40,
        borderBottomEndRadius:40
    }

})