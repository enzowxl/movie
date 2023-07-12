import { useState } from 'react'

import { View, StyleSheet, useWindowDimensions, Text, ScrollView } from 'react-native'

import {
    useFonts,
    Jost_600SemiBold,
    Jost_400Regular,
    Jost_700Bold
} from '@expo-google-fonts/jost'

import { COLORS } from '../../constants'

import { Header } from '../../components/Auth/Header'

import Splash from '../../components/Splash'
import MoviesList from '../../components/Auth/MoviesList'
import HeaderCenter from '../../components/Auth/Header/HeaderCenter'

import { useNavigation } from '@react-navigation/native'


export default function ListMoviesScreen({ route }: any) {

    const { title } = route.params


    const n = useNavigation<any>()

    const [fontLoaded] = useFonts({
        Jost_600SemiBold,
        Jost_700Bold,
        Jost_400Regular
    })

    if (!fontLoaded) return <Splash />

    return (

        <View style={styles.cont}>

            <Header.Root
                backGround
            >

                <Header.Left
                    onClick={() => { n.goBack() }}
                    image={require('../../assets/Header/previous-green.png')} />

                <HeaderCenter
                    text={title} />

                <Header.Right
                    onClick={() => { }}
                    image={require('../../assets/Header/search.png')} />

            </Header.Root>

            <View style={{ flex: 1, alignItems:'center' }}>

                <View style={{ marginBottom: 100 }} />

                <MoviesList
                    data={[
                        { id: 1, name: 'Robert Pattinson', subname: 'Bruce Wayne' },
                        { id: 2, name: 'Zoe Kravitz', subname: 'Selina Kyle' },
                        { id: 3, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 4, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 5, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 6, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 7, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 8, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 9, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 10, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 11, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 12, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 13, name: 'Paul Dano', subname: 'Edward Nashton' }
                    ]}
                />


            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    cont: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },

})