import { ReactNode } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'

import { COLORS } from '../../../constants'

interface HeaderRootProps {
    children: ReactNode,
    backGround: boolean
}

export default function HeaderRoot({ children, backGround }: HeaderRootProps) {

    const { width } = useWindowDimensions()

    return (

        <View style={[styles.cont, {
            width,
            backgroundColor: backGround ? COLORS.primary : COLORS.trans
        }]}>
            {children}
        </View>

    )
    
}

const styles = StyleSheet.create({

    cont: {
        height:90,
        justifyContent:'space-between',
        paddingHorizontal:30,
        flexDirection:'row',
        alignItems:'center',
        position: 'absolute',
        top:0,
        zIndex:100
    },

})