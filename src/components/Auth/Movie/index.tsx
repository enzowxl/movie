import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Header } from '../Header'
import { COLORS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

export default function MovieScreen({ data }: any ) {

    const { width } = useWindowDimensions()

    const n = useNavigation<any>()

    return (

        <View style={styles.cont}>

            <Header.Root
            backGround={false}
            >

                <Header.Left
                onClick={() => {n.goBack()}}
                image={require('../../../assets/Header/previous-green.png')}
                />

                <Header.Center
                text='MOVIE DETAIL'
                />

                <Header.Right
                onClick={() => {}}
                image={require('../../../assets/Header/heart-favorite.png')}
                />

            </Header.Root>

        </View>

    )
    
}

const styles = StyleSheet.create({

    cont: {
        flex:1,
        backgroundColor:COLORS.primary
    },

})