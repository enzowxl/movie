import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

export default function Genres({ data }: any) {

    const n = useNavigation<any>()


    const ItemList = ({ data: dataItem }: any) => {


        function navigateGenreScreen( dataButton : any) {

            n.navigate('ListMovies', {
                title: dataButton.name.toUpperCase().toString(),
            })
            
        }

        return (

            <TouchableOpacity 
            onPress={() => navigateGenreScreen(dataItem)}
            style={[styles.cont, {
                marginLeft: data[0] === dataItem ? 30 : 5,
            }]}>
                <Text style={styles.txt}>
                    {dataItem.name}
                </Text>
            </TouchableOpacity>

        )

    }

    return <FlatList
        data={data}
        horizontal
        keyExtractor={data => data.id.toString()}
        renderItem={({ item }) => (<ItemList data={item} />)}
    />

}

const styles = StyleSheet.create({

    cont: {
        backgroundColor: COLORS.white,
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20
    },
    txt: {
        fontFamily: 'Jost_400Regular',
        fontSize: 17,
        color: COLORS.primary,
    }

})