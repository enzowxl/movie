import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Header } from '../../components/Auth/Header'
import { COLORS, CONFIG, api } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import Splash from '../../components/Splash'
import Recommendations from '../../components/Auth/Recommendations'
import Participation from '../../components/Auth/Participations'


export default function PersonScreen({ route }: any) {

    const { width } = useWindowDimensions()

    const [response, updateResponse] = useState<any>()
    const [loading, updateLoading] = useState(true)

    const n = useNavigation<any>()

    function seeMore() {

        console.log('a')

    }

    if (!loading) return <Splash />

    return (

        <View style={styles.cont}>

            <Header.Root
                backGround={false}
            >

                <Header.Left
                    onClick={() => {
                        n.goBack()
                        updateResponse('')
                    }}
                    image={require('../../assets/Header/previous-green.png')}
                />

                <Header.Center
                    text='PERSON DETAIL'
                />

                <Header.Right
                    onClick={() => { }}
                    image={require('../../assets/Header/heart-favorite.png')}
                />

            </Header.Root>

            <ImageBackground
                style={{ backgroundColor: COLORS.primary }}
                source={{
                    uri: `https://image.tmdb.org/t/p/original/6RVxNlNmc0DIfZzaJKCJM43If3M.jpg`
                }}
            >

                <View
                    style={[styles.img, { width }]}
                />

            </ImageBackground>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.cont2, { width }]}
            >

                <View style={styles.contText}>

                    <Text style={[styles.txt, { width: 300, }]}
                    >Robert Pattinson</Text>

                </View>

                <View style={styles.contSinopse}>

                    <Text style={[styles.txt, { fontSize: 20, marginBottom: 10 }]}
                    >Biography</Text>

                    <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
                    >Robert Douglas Thomas Pattinson (born 13 May 1986) is an English actor. Noted for his versatile roles in both big-budget and independent films, Pattinson has been ranked...

                        <Text
                            onPress={seeMore}
                            style={{ color: COLORS.secondary }}
                        > More</Text>

                    </Text>

                </View>

                <View style={styles.contSinopse}>

                    <Text style={[styles.txt, { fontSize: 20, marginBottom: 10 }]}
                    >Personal information</Text>

                    <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
                    >Occupation - Acting</Text>

                    <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
                    >Genre - Masculine</Text>

                    <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
                    >Birth - 1986-05-13 (37 age)</Text>

                    <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
                    >Birthplace - Barnes, London, England, UK</Text>

                </View>

                <Participation
                    data={[
                        { id: 1, name: 'Robert Pattinson', subname: 'Bruce Wayne' },
                        { id: 2, name: 'Zoe Kravitz', subname: 'Selina Kyle' },
                        { id: 3, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 4, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 5, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 6, name: 'Paul Dano', subname: 'Edward Nashton' }
                    ]}
                />



            </ScrollView>

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