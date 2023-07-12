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
import List from '../../components/Auth/List'
import HeaderCenter from '../../components/Auth/Header/HeaderCenter'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {

    const n = useNavigation<any>()

    const [time, updateTime] = useState('day')
    const [language, updateLanguage] = useState('en-US')
    const [page, updatePage] = useState('1')

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
                onClick={() => {n.openDrawer()}}
                image={require('../../assets/Header/menu.png')} />

                <HeaderCenter 
                text='HOME' />

                <Header.Right 
                onClick={() => {}}
                image={require('../../assets/Header/search.png')} />
                
            </Header.Root>

            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{ 
                flex: 1, 
            }}>

                <View style={{ marginBottom: 100 }} />

                <List
                title='Trends'
                url={`trending/movie/${time}?language=${language}`}
                />

                <List
                title='Popular'
                url={`movie/popular?language=${language}&page=${page}`}
                />

                <List
                title='In theaters'
                url={`movie/now_playing?language=${language}&page=${page}`}
                />

                <View style={{ marginBottom: 60 }} />

            </ScrollView>

        </View>

    )

}

const styles = StyleSheet.create({

    cont: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },

})