import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Header } from '../../components/Auth/Header'
import { COLORS, CONFIG, api } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import Splash from '../../components/Splash'
import Recommendations from '../../components/Auth/Recommendations'
import Participation from '../../components/Auth/Participations'
import Biography from '../../components/Auth/Biography'
import PersonalInfo from '../../components/Auth/PersonalInfo'
import PersonImage from '../../components/Auth/MovieImage'


export default function PersonScreen({ route }: any) {

    const { personId } = route.params

    const { width } = useWindowDimensions()

    const [response, updateResponse] = useState<any>()
    const [loading, updateLoading] = useState(true)
    const [biographyPerson, updateBiographyPerson] = useState(false)

    const n = useNavigation<any>()

    function seeMore() {

        updateBiographyPerson(!biographyPerson)

    }

    useEffect(() => {


        (() => {

            api.request({
                url: `person/${personId}?language=en-US`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${CONFIG.API_KEY}`
                }
            })
                .then(function (res) {

                    updateResponse(res.data)

                })

            updateLoading(false)

        })()

    }, [personId])
    

    if (loading) return <Splash />

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

            <PersonImage
            response={response?.profile_path}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.cont2, { width }]}
            >

                <View style={styles.contText}>

                    <Text style={[styles.txt, { width: 300, }]}
                    >{response?.name}</Text>

                </View>

                {

                    response?.biography?.length === 0
                        ?
                        null
                        :
                        <Biography
                        biographyPerson={biographyPerson}
                        response={response}
                        seeMore={seeMore}
                        />

                }


                <PersonalInfo
                response={response}
                />

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