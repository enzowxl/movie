import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Header } from '../../components/Auth/Header'
import { COLORS, CONFIG, api } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import Genres from '../../components/Auth/Genres'
import Splash from '../../components/Splash'
import Cast from '../../components/Auth/Cast'
import Recommendations from '../../components/Auth/Recommendations'


export default function MovieScreen({ route }: any) {

    const { width } = useWindowDimensions()

    const [response, updateResponse] = useState<any>()
    const [loading, updateLoading] = useState(true)

    const n = useNavigation<any>()



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
                    text='MOVIE DETAIL'
                />

                <Header.Right
                    onClick={() => { }}
                    image={require('../../assets/Header/heart-favorite.png')}
                />

            </Header.Root>

            <ImageBackground
                style={{backgroundColor:COLORS.primary}}
                source={{
                    uri: `https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg`
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
                    >The Batman</Text>

                    <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
                    >2h 95m</Text>

                </View>

                <Genres
                    data={[
                        { id: 1, name: 'Crime' }, { id: 2, name: 'Mystery' }, { id: 3, name: 'Thriller' }
                    ]}
                />

                <View style={styles.contSinopse}>

                    <Text style={[styles.txt, { fontSize: 20, marginBottom: 10 }]}
                    >Sinopse</Text>

                    <Text style={[styles.txt, { fontFamily: 'Jost_400Regular', fontSize: 14 }]}
                    >In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.</Text>

                </View>

                <Cast
                    data={[
                        { id: 1, name: 'Robert Pattinson', subname: 'Bruce Wayne' },
                        { id: 2, name: 'Zoe Kravitz', subname: 'Selina Kyle' },
                        { id: 3, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 4, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 5, name: 'Paul Dano', subname: 'Edward Nashton' },
                        { id: 6, name: 'Paul Dano', subname: 'Edward Nashton' }
                    ]}
                />

                <Recommendations
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
        borderTopLeftRadius:40,
        borderTopRightRadius:40,

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