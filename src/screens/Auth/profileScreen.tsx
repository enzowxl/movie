import { View, StyleSheet, useWindowDimensions } from 'react-native'

import { COLORS } from '../../constants'

export default function ProfileScreen() {

    const { width } = useWindowDimensions()

    return(

        <View style={styles.cont}>


        </View>

    )
    
}

const styles= StyleSheet.create({

    cont: {
        flex:1,
        backgroundColor: COLORS.primary
    },

})