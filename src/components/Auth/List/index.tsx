import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../../../constants"
import { CONFIG, api } from '../../../constants'
import { useNavigation } from '@react-navigation/native';

interface ListProps {
    url: string;
    title: string;
}

export default function List({ url, title }: ListProps) {

    const n = useNavigation<any>()

    const [response, updateResponse] = useState<any>()
    const [loading, updateLoading] = useState(true)

    useEffect(() => {

        api.get(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${CONFIG.API_KEY}`
            }
        })
            .then((res) => {

                updateResponse(res.data.results)
                updateLoading(false)

            })

    }, [])

    const Item = ({ data }: { data: any }) => {

        const navigateMovie = () => {

            n.navigate('Stack', {
                data: data
            })

        }

        return (

            <TouchableOpacity
            onPress={navigateMovie}
            >
                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`
                    }}
                    style={[styles.itemCont, {
                        marginLeft: response[0].id === data.id ? 30 : 0,
                        marginRight: 10
                    }]} />
            </TouchableOpacity>

        )

    }

    return (

        <View style={styles.cont}>

            <View style={styles.contText}>

                <Text style={styles.txt}>{title}</Text>

                <TouchableOpacity>

                    <Text style={[styles.txt, {
                        fontSize: 15,
                        color: COLORS.gray
                    }]}>Se all</Text>

                </TouchableOpacity>

            </View>

            {
                loading

                ?

                <ActivityIndicator size={50} color={COLORS.secondary}/>

                :

                <FlatList
                data={response}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (<Item data={item} />)}
            />

            }

        </View>

    )

}

const styles = StyleSheet.create({

    txt: {
        fontSize: 24,
        color: COLORS.white,
        fontFamily: 'Jost_600SemiBold',
        marginBottom: 10,
        paddingHorizontal:30
    },
    cont: {
        marginBottom: 30
    },
    itemCont: {
        width: 130,
        height: 170,
        backgroundColor: COLORS.white,
    },
    contText: {
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    }

})