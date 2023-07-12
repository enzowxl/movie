import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../../../constants'


export default function CustomTabButton(props: any) {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.activeButton}>

            {props.children}

        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({

    activeButton: {
        flex:1
    },

})